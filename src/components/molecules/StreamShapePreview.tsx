type SvgPoint = readonly [number, number];

export type StreamShapePreviewKind =
  | "flow"
  | "linear"
  | "cliff"
  | "monthly"
  | "stepper"
  | "timelock"
  | "backweighted"
  | "unlockLinear"
  | "unlockCliff"
  | "exponential"
  | "cliffExponential";

type ShapePreviewSpec = {
  label: string;
  curvePath: string;
  arrow?: boolean;
};

type StreamShapePreviewProps = {
  shape: StreamShapePreviewKind;
};

const CURVE_COLOR = "#f77423";

function drawPolyline(points: readonly SvgPoint[]): string {
  return points.map(([x, y], index) => `${index === 0 ? "M" : "L"} ${x} ${y}`).join(" ");
}

const SHAPE_PREVIEWS: Record<StreamShapePreviewKind, ShapePreviewSpec> = {
  backweighted: {
    curvePath: drawPolyline([
      [12, 36],
      [36, 36],
      [36, 33],
      [60, 33],
      [60, 26],
      [84, 26],
      [84, 16],
      [108, 16],
      [108, 10],
    ]),
    label: "Backweighted",
  },
  cliff: {
    curvePath: drawPolyline([
      [12, 36],
      [48, 36],
      [48, 26],
      [108, 10],
    ]),
    label: "Cliff",
  },
  cliffExponential: {
    curvePath: "M 12 36 L 50 36 L 50 29 C 70 29 88 26 108 10",
    label: "Cliff exponential",
  },
  exponential: {
    curvePath: "M 12 36 C 45 36 72 34 108 10",
    label: "Exponential",
  },
  flow: {
    arrow: true,
    curvePath: drawPolyline([
      [12, 36],
      [104, 10],
    ]),
    label: "Flow",
  },
  linear: {
    curvePath: drawPolyline([
      [12, 36],
      [108, 10],
    ]),
    label: "Linear",
  },
  monthly: {
    curvePath: drawPolyline([
      [12, 36],
      [24, 36],
      [24, 32],
      [36, 32],
      [36, 28],
      [48, 28],
      [48, 24],
      [60, 24],
      [60, 20],
      [72, 20],
      [72, 16],
      [84, 16],
      [84, 12],
      [108, 12],
    ]),
    label: "Monthly",
  },
  stepper: {
    curvePath: drawPolyline([
      [12, 36],
      [36, 36],
      [36, 30],
      [60, 30],
      [60, 24],
      [84, 24],
      [84, 18],
      [108, 18],
      [108, 10],
    ]),
    label: "Stepper",
  },
  timelock: {
    curvePath: drawPolyline([
      [12, 36],
      [88, 36],
      [88, 10],
      [108, 10],
    ]),
    label: "Timelock",
  },
  unlockCliff: {
    curvePath: drawPolyline([
      [12, 36],
      [12, 30],
      [58, 30],
      [58, 22],
      [108, 10],
    ]),
    label: "Unlock cliff",
  },
  unlockLinear: {
    curvePath: drawPolyline([
      [12, 36],
      [12, 28],
      [108, 10],
    ]),
    label: "Unlock linear",
  },
};

export default function StreamShapePreview({ shape }: StreamShapePreviewProps) {
  const shapePreview = SHAPE_PREVIEWS[shape];
  const label = `${shapePreview.label} stream shape preview`;

  return (
    <svg
      aria-label={label}
      height="48"
      role="img"
      style={{ display: "block" }}
      viewBox="0 0 120 48"
      width="120"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{label}</title>
      <path
        d="M 12 8 V 38 H 110"
        fill="none"
        stroke="var(--ifm-color-emphasis-400)"
        strokeWidth="1"
      />
      <path
        d="M 12 28 H 110 M 45 8 V 38 M 78 8 V 38"
        fill="none"
        stroke="var(--ifm-color-emphasis-200)"
      />
      <path
        d={shapePreview.curvePath}
        fill="none"
        stroke={CURVE_COLOR}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      {shapePreview.arrow && (
        <path
          d="M 99 6 L 109 9.5 L 102 18"
          fill="none"
          stroke={CURVE_COLOR}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
      )}
    </svg>
  );
}
