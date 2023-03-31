import styled from "styled-components";
import Link from "next/link";
import InfoTab from "@/components/coin_page/InfoTab";
import CustomHead from "@/components/coin_page/CustomHead";
import Button from "@/components/coin_page/Button";
import TradingViewTab from "@/components/coin_page/TradingViewTab";
import { useGetConfig } from "@/utils/custom_hooks/useGetConfig";
import { TTradingViewData } from "@/utils/config/types/TTradingViewData.type";
import ChartTab from "@/components/coin_page/ChartTab";
import TransactionsTab from "@/components/coin_page/TransactionsTab";
import { TTokenInfo } from "@/utils/config/types/TTokenInfo.type";
import ExpertsRatingTab from "@/components/coin_page/ExpertsRatingTab";
import CommunityTrustTab from "@/components/coin_page/CommunityTrustTab";
import FearAndGreedTab from "@/components/coin_page/FearAndGreedTab";
import AssessmentTab from "@/components/coin_page/AssessmentTab";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  const { tradingViewDataConfig } = useGetConfig("tradingViewData");

  const { tokenInfoConfig } = useGetConfig("tokenInfo");

  useEffect(() => {
    setTimeout(() => setMounted(true), 1000);
  }, []);

  return (
    <>
      <CustomHead />
      <Wrapper mounted={mounted} className="gap_1">
        <PartsWrapper className="flex_column">
          <FirstPartContainer className="flex_column gap_1">
            <InfoTab />
            <Link
              target="_blank"
              href={
                "https://pancakeswap.finance/swap?outputCurrency=" +
                (tokenInfoConfig as TTokenInfo)?.contractAddress
              }
            >
              <Button />
            </Link>
            {(tradingViewDataConfig as TTradingViewData[])?.map((el, i) => (
              <TradingViewTab key={i} data={el} />
            ))}
          </FirstPartContainer>
        </PartsWrapper>

        <SecondPartContainer className="flex_column gap_1">
          <ChartTab />
          <TransactionsTab />
        </SecondPartContainer>
        <PartsWrapper>
          <ThirdPartContainer className="flex_column gap_1">
            <ExpertsRatingTab />
            <CommunityTrustTab />
            <AssessmentTab />
            <FearAndGreedTab />
          </ThirdPartContainer>
        </PartsWrapper>
      </Wrapper>
    </>
  );
}

const PartsWrapper = styled.div`
  min-height: 100%;
`;

const FirstPartContainer = styled.div`
  width: 320px;
  align-items: center;
  position: sticky;
  top: 1rem;
  z-index: 1;
`;

const SecondPartContainer = styled.div`
  flex-grow: 1;
`;

const ThirdPartContainer = styled.div`
  min-width: 300px;
  position: sticky;
  top: 1rem;
  z-index: 1;
`;

const Wrapper = styled.main<{ mounted: boolean }>`
  display: ${({ mounted }) => (mounted ? "flex" : "none")};
  width: 100%;
  padding: 1rem;
  justify-content: space-between;
  @media screen and (max-width: 1439px) {
    flex-direction: column;
  }
`;
