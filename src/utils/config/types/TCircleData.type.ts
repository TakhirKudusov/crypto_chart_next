import { COLOR } from "@/utils/enums/color.enum";

export type TCircleData = {
  series: number[];
  options: {
    chart: {
      type: "radialBar";
      offsetY?: number;
      sparkline: {
        enabled: boolean;
      };
    };
    plotOptions: {
      radialBar: {
        startAngle: number;
        endAngle: number;
        track: {
          background: COLOR;
          strokeWidth: string;
          margin: number; // margin is in pixels
          dropShadow: {
            enabled: boolean;
            top?: number;
            left?: number;
            color?: COLOR;
            opacity?: number;
            blur?: number;
          };
        };
        dataLabels: {
          show?: boolean;
          name?: {
            show?: boolean;
            color?: COLOR;
            fontSize?: string;
            offsetY?: number;
            fontWeight?: number;
          };
          value?: {
            offsetY?: number;
            fontSize?: string;
            color?: COLOR;
            fontWeight?: number;
            formatter?: (val: any) => any;
          };
        };
      };
    };
    grid: {
      padding: {
        top?: number;
        bottom?: number;
      };
    };
    fill?: {
      type?: "gradient";
      colors: COLOR[];
      gradient?: {
        shade: "light" | "dark";
        type: "horizontal";
        gradientToColors?: COLOR[];
        shadeIntensity?: number;
        inverseColors?: boolean;
        opacityFrom?: number;
        opacityTo?: number;
        stops?: number[];
      };
    };
    labels?: string[];
    stroke?: {
      lineCap: "round";
    };
  };
};
