import Image from "next/image";
import { TTokenInfo } from "@/utils/config/types/TTokenInfo.type";
import styled from "styled-components";
import { ChartLine } from "@styled-icons/typicons/ChartLine";
import { COLOR } from "@/utils/enums/color.enum";
import { useGetAddress } from "@/utils/custom_hooks/useGetAddress";
import { useGetConfig } from "@/utils/custom_hooks/useGetConfig";

const ChartHeader = () => {
  const address = useGetAddress();

  const { tokenInfoConfig } = useGetConfig("tokenInfo");
  return (
    <HeaderContainer className="flex">
      <TokenInfoContainer className="flex gap_1">
        <ImageContainer className="rounded_border_100">
          <Image src={`/${address}/logo.svg`} alt="token logo" fill />
        </ImageContainer>
        <HeaderContentContainer className="flex_column">
          <TokenNameText>{(tokenInfoConfig as TTokenInfo)?.name}</TokenNameText>
          <TokenAddressText>
            {(tokenInfoConfig as TTokenInfo)?.contractAddress}
          </TokenAddressText>
        </HeaderContentContainer>
      </TokenInfoContainer>
      <PriceContainer className="flex">
        <GrowValueText>
          {(tokenInfoConfig as TTokenInfo)?.growValue}
        </GrowValueText>
        <IconContainer className="flex rounded_border_100">
          <ChartLineIcon />
        </IconContainer>
        <PriceText>{(tokenInfoConfig as TTokenInfo)?.price}</PriceText>
        <TimeText>за последние 24 часа</TimeText>
        <GrowBadge className="rounded_border_100">
          {(tokenInfoConfig as TTokenInfo)?.growPercents}
        </GrowBadge>
      </PriceContainer>
    </HeaderContainer>
  );
};

const ChartLineIcon = styled(ChartLine)`
  color: ${COLOR.GREEN};
  width: 16px;
`;

const GrowBadge = styled.div`
  font-size: 14px;
  padding: 3px 5px;
  background-color: ${COLOR.GREEN};
  @media screen and (max-width: 375px) {
    font-size: 12px;
  }
`;

const TimeText = styled.p`
  font-size: 14px;
  color: ${COLOR.WHITE_50};
  @media screen and (max-width: 375px) {
    font-size: 12px;
  }
`;

const PriceText = styled.p`
  color: ${COLOR.WHITE_SECONDARY};
  font-size: 22px;
  font-weight: 700;
  @media screen and (max-width: 375px) {
    font-size: 18px;
  }
`;

const IconContainer = styled.div`
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background-color: ${COLOR.GREEN_20};
  margin-right: 5px;
`;

const GrowValueText = styled.p`
  color: ${COLOR.GREEN};
  font-weight: 500;
  @media screen and (max-width: 375px) {
    font-size: 14px;
  }
`;

const PriceContainer = styled.div`
  align-items: center;
  max-width: 250px;
  justify-content: flex-end;
  gap: 0.5rem;
  flex-wrap: wrap;
  @media screen and (max-width: 769px) {
    justify-content: center;
  }
`;

const TokenAddressText = styled.p`
  color: ${COLOR.WHITE_50};
  font-size: 12px;
  @media screen and (max-width: 375px) {
    font-size: 10px;
  }
`;

const TokenNameText = styled.h3`
  color: ${COLOR.WHITE_SECONDARY};
  font-size: 28px;
  font-weight: 400;
  @media screen and (max-width: 375px) {
    font-size: 24px;
  }
`;

const HeaderContentContainer = styled.div`
  gap: 2px;
  @media screen and (max-width: 769px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 44px;
  height: 44px;
  background-color: ${COLOR.WHITE};
  box-shadow: 0 0 0 4px ${COLOR.WHITE};
  margin-top: 4px;
  margin-left: 4px;
`;

const TokenInfoContainer = styled.div`
  @media screen and (max-width: 769px) {
    flex-direction: column;
    align-items: center;
  }
`;

const HeaderContainer = styled.div`
  padding: 20px;
  justify-content: space-between;
  @media screen and (max-width: 769px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;
export default ChartHeader;
