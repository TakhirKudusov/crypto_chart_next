import { TCircleData } from "@/utils/config/types/TCircleData.type";
import { COLOR } from "@/utils/enums/color.enum";

export const expertsDataConfig: TCircleData = {
  series: [93.6],
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
          background: COLOR.WHITE_05,
          strokeWidth: "97%",
          margin: 25,
          dropShadow: {
            enabled: true,
            top: 15,
            left: 0,
            color: COLOR.GREEN,
            opacity: 0.75,
            blur: 10,
          },
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: -20,
            fontSize: "36px",
            color: COLOR.GREEN,
            fontWeight: 800,
          },
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
