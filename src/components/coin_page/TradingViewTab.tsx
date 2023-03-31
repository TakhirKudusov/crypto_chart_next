import styled from "styled-components";
import { COLOR } from "@/utils/enums/color.enum";
import { FC, memo, ReactNode } from "react";
import { TTradingViewData } from "@/utils/config/types/TTradingViewData.type";
import { ShieldCheck } from "@styled-icons/heroicons-solid/ShieldCheck";
import { PresentationChartLine } from "@styled-icons/heroicons-solid/PresentationChartLine";

type Props = {
  data: TTradingViewData;
};
const TradingViewTab: FC<Props> = ({ data: { header, desc, type } }) => {
  return (
    <TradingViewContainer className="flex rounded_border_20 grey_bg gap_1">
      <TradingIconContainer className="flex rounded_border_100">
        {type === "presentation" ? <PresentationIcon /> : <ShieldIcon />}
      </TradingIconContainer>
      <TradingTabContentContainer className="flex_column">
        <HeaderText className="">{header}</HeaderText>
        <Text>{desc}</Text>
      </TradingTabContentContainer>
    </TradingViewContainer>
  );
};

const Text = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: ${COLOR.WHITE_75};
`;

const HeaderText = styled.h3`
  font-size: 18px;
  color: ${COLOR.WHITE};
  font-weight: 600;
`;

const ShieldIcon = styled(ShieldCheck)`
  height: 26px;
  width: 26px;
  color: ${COLOR.GREEN};
`;

const PresentationIcon = styled(PresentationChartLine)`
  height: 26px;
  width: 26px;
  color: ${COLOR.GREEN};
`;

const TradingTabContentContainer = styled.div`
  gap: 10px;
`;

const TradingIconContainer = styled.div`
  min-width: 48px;
  height: 48px;
  background-color: ${COLOR.GREEN_10};
  justify-content: center;
  align-items: center;
`;

const TradingViewContainer = styled.div`
  padding: 15px 20px;
  width: 100%;
  align-items: center;
  @media screen and (max-width: 1280px) {
    height: 126px;
  }
`;

export default memo(TradingViewTab);
