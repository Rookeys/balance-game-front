type ColorGroupType = {
  title: string;
  subtitle: string;
  key: string;
  colorSteps?: Array<string>;
};

const allStep = ["10", "20", "30", "40", "DEFAULT", "60", "70", "80", "90"];

export const colorGroups: Array<ColorGroupType> = [
  {
    title: "Primary Colors",
    subtitle: "대표 색상",
    key: "PRIMARY",
    colorSteps: allStep,
  },
  {
    title: "Secondary Colors",
    subtitle: "보조 색상",
    key: "SECONDARY",
    colorSteps: allStep,
  },
  {
    title: "Dark Colors",
    subtitle: "어두운 색상",
    key: "DARK",
    colorSteps: allStep,
  },
  {
    title: "Gray Colors",
    subtitle: "회색 색상",
    key: "GRAY",
    colorSteps: allStep,
  },
  {
    title: "Purple Color",
    subtitle: "보라색",
    key: "PURPLE",
    colorSteps: allStep,
  },
  {
    title: "Pink Color",
    subtitle: "분홍색",
    key: "PINK",
    colorSteps: allStep,
  },
  {
    title: "Yellow Color",
    subtitle: "노란색",
    key: "YELLOW",
    colorSteps: allStep,
  },
  {
    title: "Light Color",
    subtitle: "밝은 색상",
    key: "LIGHT",
  },
  {
    title: "White Color",
    subtitle: "흰색",
    key: "WHITE",
  },
  {
    title: "Black Color",
    subtitle: "검은색",
    key: "BLACK",
  },
  {
    title: "Night Color",
    subtitle: "다크모드 배경 색",
    key: "NIGHT",
  },
  {
    title: "Dark Night Color",
    subtitle: "다크모드 중 좀 더 어두운 배경 색",
    key: "DARK_NIGHT",
  },
];