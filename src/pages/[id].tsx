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
        <PartsWrapper className="xl">
          <FirstPartContainer className="flex_column gap_1">
            <InfoTab />
            <Link
              target="_blank"
              href={
                "https://pancakeswap.finance/swap?outputCurrency=" +
                (tokenInfoConfig as TTokenInfo)?.contractAddress
              }
              className="sm_none"
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
          <PartsWrapper className="flex md">
            <FirstPartContainer className="flex_column gap_1 md">
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
            <ThirdPartContainer className="flex_column gap_1">
              <ExpertsRatingTab />
              <CommunityTrustTab />
              <AssessmentTab />
              <FearAndGreedTab />
            </ThirdPartContainer>
          </PartsWrapper>
          <TransactionsTab />
        </SecondPartContainer>
        <PartsWrapper className="flex xl">
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
  flex-direction: column;
  @media screen and (max-width: 1280px) {
    flex-direction: row;
    gap: 1rem;
  }
  @media screen and (max-width: 769px) {
    flex-direction: column;
  }
`;

const FirstPartContainer = styled.div`
  width: 320px;
  align-items: center;
  position: sticky;
  top: 1rem;
  z-index: 1;
  @media screen and (max-width: 1280px) {
    position: unset;
    top: unset;
    z-index: unset;
    flex-basis: 50%;
    width: unset;
  }
`;

const SecondPartContainer = styled.div`
  flex-grow: 1;
`;

const ThirdPartContainer = styled.div`
  width: 300px;
  position: sticky;
  top: 1rem;
  z-index: 1;
  @media screen and (max-width: 1280px) {
    position: unset;
    top: unset;
    z-index: unset;
    flex-basis: 50%;
    min-width: unset;
  }
  @media screen and (max-width: 769px) {
    width: 100%;
  }
`;

const Wrapper = styled.main<{ mounted: boolean }>`
  display: ${({ mounted }) => (mounted ? "flex" : "none")};
  width: 100%;
  padding: 1rem;
  justify-content: space-between;
  @media screen and (max-width: 1280px) {
    flex-direction: column;
  }
`;
