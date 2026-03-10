import functionPlot, { type FunctionPlotOptions } from "function-plot";
import { memo, useEffect, useRef } from "react";

export type ExtendedFunctionPlotOptions = FunctionPlotOptions & {
  xAxisLabel?: string;
  xDomainLimit?: number;
  yDomainLimit?: number;
};

export type FunctionPlotProps = {
  options?: ExtendedFunctionPlotOptions;
};

// See https://github.com/mauriciopoppe/function-plot
const FunctionPlot = memo(({ options }: FunctionPlotProps) => {
  const rootEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      functionPlot({
        ...options,
        disableZoom: true,
        grid: true,
        target: rootEl.current,
        yAxis: { domain: [0, options?.yDomainLimit || 100], label: "y - earnings" },
        xAxis: {
          domain: [0, options?.xDomainLimit || 100],
          label: options?.xAxisLabel || "x - time",
        },
      });
    } catch (err) {
      console.error("FunctionPlot error: ", err);
    }
  }, [options]);

  return <div ref={rootEl} />;
});

FunctionPlot.displayName = "FunctionPlot";

export default FunctionPlot;
