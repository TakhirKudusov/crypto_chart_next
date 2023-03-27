import { COLOR } from "@/utils/enums/color.enum";

export type TTransactionData = {
  qty: string;
  token: string;
  amount: string;
  price: string;
  time: string;
  tx: string;
  bgColor: COLOR;
  fontColor: COLOR;
};
