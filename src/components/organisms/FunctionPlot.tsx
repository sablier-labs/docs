import { memo, useEffect, useRef } from "react";
import functionPlot, { FunctionPlotOptions } from "function-plot";

export interface ExtendedFunctionPlotOptions extends FunctionPlotOptions {
  xAxisLabel?: string;
  xDomainLimit?: number;
  yDomainLimit?: number;
}

export interface FunctionPlotProps {
  options?: ExtendedFunctionPlotOptions;
}

// See https://github.com/mauriciopoppe/function-plot
const FunctionPlot: React.FC<FunctionPlotProps> = memo(function ({ options }: FunctionPlotProps) {
  const rootEl = useRef(null);

  useEffect(() => {
    try {
      functionPlot({
        ...options,
        disableZoom: true,
        grid: true,
        xAxis: {
          domain: [0, options?.xDomainLimit || 100],
          label: options?.xAxisLabel || "x - time",
        },
        yAxis: { domain: [0, options?.yDomainLimit || 100], label: "y - earnings" },
        target: rootEl.current,
      });
    } catch (err) {
      console.error("FunctionPlot error: ", err);
    }
  }, [options, rootEl]);

  return <div ref={rootEl} />;
});

FunctionPlot.displayName = "FunctionPlot";

export default FunctionPlot;
