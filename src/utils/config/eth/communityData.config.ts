import { TCircleData } from "@/utils/config/types/TCircleData.type";
import { COLOR } from "@/utils/enums/color.enum";

export const communityDataConfig: TCircleData = {
  series: [87.1],
  options: {
    chart: {
      type: "radialBar",
      offsetY: -10,
      sparkline: {
        enabled: false,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: COLOR.RED,
          strokeWidth: "97%",
          margin: 25,
          dropShadow: {
            enabled: true,
            top: 15,
            left: 0,
            color: COLOR.GREEN_10,
            opacity: 0.75,
            blur: 10,
          },
        },
        dataLabels: {
          show: false,
        },
      },
    },
    grid: {
      padding: {
        top: -10,
      },
    },
    fill: {
      colors: [COLOR.GREEN],
    },
    stroke: {
      lineCap: "round",
    },
  },
};
