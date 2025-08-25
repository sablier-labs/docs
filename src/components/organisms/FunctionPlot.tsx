import functionPlot, { type FunctionPlotOptions } from "function-plot";
import { memo, useEffect, useRef } from "react";

export interface ExtendedFunctionPlotOptions extends FunctionPlotOptions {
  xAxisLabel?: string;
  xDomainLimit?: number;
  yDomainLimit?: number;
}

export interface FunctionPlotProps {
  options?: ExtendedFunctionPlotOptions;
}

// See https://github.com/mauriciopoppe/function-plot
const FunctionPlot: React.FC<FunctionPlotProps> = memo(({ options }: FunctionPlotProps) => {
  const rootEl = useRef(null);

  useEffect(() => {
    try {
      functionPlot({
        ...options,
        disableZoom: true,
        grid: true,
        target: rootEl.current,
        xAxis: {
          domain: [0, options?.xDomainLimit || 100],
          label: options?.xAxisLabel || "x - time",
        },
        yAxis: { domain: [0, options?.yDomainLimit || 100], label: "y - earnings" },
      });
    } catch (err) {
      console.error("FunctionPlot error: ", err);
    }
  }, [options]);

  return <div ref={rootEl} />;
});

FunctionPlot.displayName = "FunctionPlot";

export default FunctionPlot;
