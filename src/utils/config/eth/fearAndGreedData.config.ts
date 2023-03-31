import { TCircleData } from "@/utils/config/types/TCircleData.type";
import { COLOR } from "@/utils/enums/color.enum";

export const fearAndGreedDataConfig: TCircleData = {
  series: [92],
  options: {
    chart: {
      type: "radialBar",
      offsetY: -15,
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
            show: true,
            color: COLOR.GREEN_70,
            fontSize: "14px",
            offsetY: -15,
            fontWeight: 400,
          },
          value: {
            offsetY: -50,
            fontSize: "36px",
            color: COLOR.GREEN,
            fontWeight: 800,
            formatter: (val) => {
              return val;
            },
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
      type: "gradient",
      colors: [COLOR.RED],
      gradient: {
        shade: "dark",
        type: "horizontal",
        gradientToColors: [COLOR.GREEN],
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["балла"],
  },
};
