import { TInformation } from "@/utils/config/types/TInformation.type";
import { COLOR } from "@/utils/enums/color.enum";

export const informationConfig: TInformation[] = [
  {
    name: "Общее предложение",
    value: "100,000,000",
    bgColor: COLOR.WHITE_10,
    nameFontColor: COLOR.WHITE_75,
    valueFontColor: COLOR.WHITE,
  },
  {
    name: "Рыночная капитализация",
    value: "$42,168,153",
    bgColor: COLOR.WHITE_10,
    nameFontColor: COLOR.WHITE_75,
    valueFontColor: COLOR.WHITE,
  },
  {
    name: "Рейтинг доверия",
    value: "98.6%",
    bgColor: COLOR.GREEN_10,
    nameFontColor: COLOR.GREEN_70,
    valueFontColor: COLOR.GREEN,
  },
  {
    name: "Общественное доверие",
    value: "96.1%",
    bgColor: COLOR.GREEN_10,
    nameFontColor: COLOR.GREEN_70,
    valueFontColor: COLOR.GREEN,
  },
  {
    name: "Проект застрахован",
    value: "$200,000,000",
    bgColor: COLOR.WHITE_10,
    nameFontColor: COLOR.WHITE_75,
    valueFontColor: COLOR.WHITE,
  },
];
