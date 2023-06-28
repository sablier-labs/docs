import functionPlot, { FunctionPlotOptions } from "function-plot";
import React, { useEffect, useRef } from "react";

export interface FunctionPlotProps {
  options?: FunctionPlotOptions;
}

// See https://github.com/mauriciopoppe/function-plot
const FunctionPlot: React.FC<FunctionPlotProps> = React.memo(function ({ options }: FunctionPlotProps) {
  const rootEl = useRef(null);

  useEffect(() => {
    try {
      functionPlot({
        ...options,
        disableZoom: true,
        grid: true,
        xAxis: { domain: [0, 100], label: "x - time" },
        yAxis: { domain: [0, 100], label: "y - earnings" },
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
