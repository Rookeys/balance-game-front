#!/usr/bin/env python3
"""
zznpk.com/game/{id} 페이지가 404가 아닌 게임 ID를 수집하는 스크립트.

사용 예:
  python3 scripts/find_valid_game_ids.py
  python3 scripts/find_valid_game_ids.py --start 1 --end 250
  python3 scripts/find_valid_game_ids.py --output valid_game_ids.txt
  python3 scripts/find_valid_game_ids.py --no-js
"""

from __future__ import annotations

import argparse
import sys
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
from typing import NamedTuple
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen

BASE_URL = "https://zznpk.com/game"
DEFAULT_START = 1
DEFAULT_END = 250
DEFAULT_WORKERS = 10
REQUEST_TIMEOUT_SEC = 15
USER_AGENT = "zznpk-game-id-checker/1.0"
SCRIPT_DIR = Path(__file__).resolve().parent
DEFAULT_JS_OUTPUT = SCRIPT_DIR / "gameId.js"
IDS_PER_LINE = 20


class CheckResult(NamedTuple):
    game_id: int
    status_code: int | None
    is_valid: bool
    error_message: str | None = None


def check_game_page(game_id: int) -> CheckResult:
    """단일 게임 페이지 HTTP 상태를 확인한다."""
    url = f"{BASE_URL}/{game_id}"
    request = Request(url, headers={"User-Agent": USER_AGENT})

    try:
        with urlopen(request, timeout=REQUEST_TIMEOUT_SEC) as response:
            status_code = response.status
            return CheckResult(
                game_id=game_id,
                status_code=status_code,
                is_valid=status_code != 404,
            )
    except HTTPError as error:
        return CheckResult(
            game_id=game_id,
            status_code=error.code,
            is_valid=error.code != 404,
            error_message=str(error),
        )
    except URLError as error:
        return CheckResult(
            game_id=game_id,
            status_code=None,
            is_valid=False,
            error_message=str(error.reason),
        )


def format_game_id_js(valid_ids: list[int]) -> str:
    """유효 ID 목록을 gameId.js 내용으로 변환한다."""
    if not valid_ids:
        return (
            "// 자동 생성 파일 — scripts/find_valid_game_ids.py 실행 결과\n"
            "export const gameId = []\n"
        )

    id_chunks: list[str] = []
    for index in range(0, len(valid_ids), IDS_PER_LINE):
        chunk = valid_ids[index : index + IDS_PER_LINE]
        id_chunks.append(", ".join(str(game_id) for game_id in chunk))

    formatted_ids = ",\n  ".join(id_chunks)
    return (
        "// 자동 생성 파일 — scripts/find_valid_game_ids.py 실행 결과\n"
        f"export const gameId = [\n  {formatted_ids}\n]\n"
    )


def write_game_id_js(valid_ids: list[int], output_path: Path) -> None:
    """유효 ID를 gameId.js 파일로 저장한다."""
    output_path.write_text(format_game_id_js(valid_ids), encoding="utf-8")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="zznpk.com/game/{id} 중 404가 아닌 페이지 번호를 추출합니다."
    )
    parser.add_argument(
        "--start",
        type=int,
        default=DEFAULT_START,
        help=f"시작 ID (기본값: {DEFAULT_START})",
    )
    parser.add_argument(
        "--end",
        type=int,
        default=DEFAULT_END,
        help=f"끝 ID (기본값: {DEFAULT_END})",
    )
    parser.add_argument(
        "--workers",
        type=int,
        default=DEFAULT_WORKERS,
        help=f"동시 요청 수 (기본값: {DEFAULT_WORKERS})",
    )
    parser.add_argument(
        "--output",
        type=str,
        default="",
        help="결과를 저장할 텍스트 파일 경로 (예: valid_game_ids.txt)",
    )
    parser.add_argument(
        "--js-output",
        type=str,
        default=str(DEFAULT_JS_OUTPUT),
        help=f"gameId.js 저장 경로 (기본값: {DEFAULT_JS_OUTPUT})",
    )
    parser.add_argument(
        "--no-js",
        action="store_true",
        help="gameId.js 파일을 생성하지 않음",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()

    if args.start < 1:
        print("오류: --start는 1 이상이어야 합니다.", file=sys.stderr)
        return 1

    if args.end < args.start:
        print("오류: --end는 --start보다 크거나 같아야 합니다.", file=sys.stderr)
        return 1

    if args.workers < 1:
        print("오류: --workers는 1 이상이어야 합니다.", file=sys.stderr)
        return 1

    game_ids = range(args.start, args.end + 1)
    started_at = time.perf_counter()
    results: list[CheckResult] = []

    print(f"검사 범위: {args.start} ~ {args.end} (총 {len(game_ids)}개)")
    print(f"대상 URL: {BASE_URL}/{{id}}")
    print(f"동시 요청 수: {args.workers}\n")

    with ThreadPoolExecutor(max_workers=args.workers) as executor:
        future_map = {
            executor.submit(check_game_page, game_id): game_id
            for game_id in game_ids
        }

        for future in as_completed(future_map):
            result = future.result()
            results.append(result)

            if result.status_code is None:
                print(f"[오류] game/{result.game_id}: {result.error_message}")
            elif result.is_valid:
                print(f"[유효] game/{result.game_id} -> {result.status_code}")
            else:
                print(f"[404 ] game/{result.game_id}")

    valid_ids = sorted(result.game_id for result in results if result.is_valid)
    elapsed_sec = time.perf_counter() - started_at

    print("\n=== 결과 요약 ===")
    print(f"유효 페이지 수: {len(valid_ids)}")
    print(f"404 페이지 수: {len(results) - len(valid_ids)}")
    print(f"소요 시간: {elapsed_sec:.1f}초")
    print("\n유효 ID 목록:")
    print(valid_ids)

    if args.output:
        with open(args.output, "w", encoding="utf-8") as output_file:
            output_file.write("\n".join(str(game_id) for game_id in valid_ids))
            output_file.write("\n")
        print(f"\n텍스트 파일 저장 완료: {args.output}")

    if not args.no_js:
        js_output_path = Path(args.js_output)
        write_game_id_js(valid_ids, js_output_path)
        print(f"gameId.js 저장 완료: {js_output_path}")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
