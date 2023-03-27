import styled from "styled-components";
import Link from "next/link";
import InfoTab from "@/components/coin_page/InfoTab";
import CustomHead from "@/components/coin_page/CustomHead";
import Button from "@/components/coin_page/Button";
import { useGetAddress } from "@/utils/custom_hooks/useGetAddress";
import TradingViewTab from "@/components/coin_page/TradingViewTab";
import { useGetConfig } from "@/utils/custom_hooks/useGetConfig";
import { TTradingViewData } from "@/utils/config/types/TTradingViewData.type";
import ChartTab from "@/components/coin_page/ChartTab";
import TransactionsTab from "@/components/coin_page/TransactionsTab";

export default function Home() {
  const address = useGetAddress();

  const { tradingViewDataConfig } = useGetConfig("tradingViewData");

  return (
    <>
      <CustomHead />
      <main>
        <Wrapper className="flex gap_1">
          <FirstPartContainer className="flex_column gap_1">
            <InfoTab />
            <Link
              target="_blank"
              href={
                "https://pancakeswap.finance/swap?outputCurrency=" + address
              }
            >
              <Button />
            </Link>
            {(tradingViewDataConfig as TTradingViewData[])?.map((el, i) => (
              <TradingViewTab key={i} data={el} />
            ))}
          </FirstPartContainer>
          <SecondPArtContainer className="flex_column gap_1">
            <ChartTab />
            <TransactionsTab />
          </SecondPArtContainer>
          <ThirdPartContainer className="flex_column gap_1">
            <DashBoardTab className="flex_column rounded_border_20 grey_bg"></DashBoardTab>
            <DashBoardTab className="flex_column rounded_border_20 grey_bg"></DashBoardTab>
            <DashBoardTab className="flex_column rounded_border_20 grey_bg"></DashBoardTab>
            <DashBoardTab className="flex_column rounded_border_20 grey_bg"></DashBoardTab>
          </ThirdPartContainer>
        </Wrapper>
      </main>
    </>
  );
}

const DashBoardTab = styled.div`
  min-height: 100px;
`;

const FirstPartContainer = styled.div`
  width: 320px;
  align-items: center;
  height: fit-content;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const SecondPArtContainer = styled.div`
  flex-grow: 1;
`;

const ThirdPartContainer = styled.div`
  min-width: 300px;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 1rem;
  justify-content: space-between;
`;
