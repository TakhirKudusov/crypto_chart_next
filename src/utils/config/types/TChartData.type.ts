import { COLOR } from "@/utils/enums/color.enum";

export type TChartData = {
  series: {
    data: {
      x: Date;
      y: [number, number, number, number];
    }[];
  }[];
  options: {
    plotOptions: {
      candlestick: {
        colors: {
          upward: COLOR;
          downward: COLOR;
        };
      };
    };
    chart: {
      type: "candlestick";
      height: number;
    };
    xaxis: {
      type: "datetime";
      labels: {
        style: {
          colors: COLOR;
        };
      };
    };
    yaxis: {
      tooltip: {
        enabled: boolean;
      };
      labels: {
        style: {
          colors: COLOR;
        };
      };
    };
  };
};
