import { NextRequest, NextResponse } from "next/server"
import { revalidatePath } from "next/cache"

const revalidateSecret = process.env.REVALIDATE_SECRET

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { path, secret } = body

  if (!path || typeof path !== "string") {
    return NextResponse.json({ message: "Path is required and should be a string" }, { status: 400 })
  }

  if (!secret || typeof secret !== "string") {
    return NextResponse.json({ message: "Secret is required and should be a string" }, { status: 400 })
  }

  if (secret !== revalidateSecret) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 })
  }

  try {
    revalidatePath(path)
    return NextResponse.json({
      message: `Revalidation triggered for ${path}`
    })
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error during revalidation",
        error
      },
      { status: 500 }
    )
  }
}
