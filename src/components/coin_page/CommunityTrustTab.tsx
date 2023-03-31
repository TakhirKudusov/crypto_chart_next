import styled from "styled-components";
import { COLOR } from "@/utils/enums/color.enum";
import { useGetConfig } from "@/utils/custom_hooks/useGetConfig";
import dynamic from "next/dynamic";
import { TCircleData } from "@/utils/config/types/TCircleData.type";
import { TCommunityDataType } from "@/utils/config/types/TCommunityData.type";

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const CommunityTrustTab = () => {
  const { communityDataConfig } = useGetConfig("communityData");
  const { communityEvalDataConfig } = useGetConfig("communityEvalData");

  return (
    <Container className="flex_column rounded_border_20 grey_bg">
      <HeaderText>Доверие сообщества</HeaderText>
      {communityDataConfig && (
        <CircleContainer className="flex_column">
          <ApexCharts
            options={(communityDataConfig as TCircleData)?.options}
            series={(communityDataConfig as TCircleData)?.series}
            type="radialBar"
            height={350}
          />
        </CircleContainer>
      )}
      <PosEvalContainer className="flex_column">
        <PosEvalQty>
          {(communityEvalDataConfig as TCommunityDataType)?.posQty}
        </PosEvalQty>
        <PosEvalQtyDesc>
          положительных
          <br /> оценок
        </PosEvalQtyDesc>
        <PercentsContainer className="flex">
          <PosPrcText>
            {(communityEvalDataConfig as TCommunityDataType)?.posPrc}% (
            {(communityEvalDataConfig as TCommunityDataType)?.posQty})
          </PosPrcText>
          <NegPrcText>
            {(communityEvalDataConfig as TCommunityDataType)?.negPrc}% (
            {(communityEvalDataConfig as TCommunityDataType)?.negQty})
          </NegPrcText>
        </PercentsContainer>
      </PosEvalContainer>
    </Container>
  );
};

const PosPrcText = styled.div`
  font-size: 12px;
  color: ${COLOR.GREEN_70};
`;

const NegPrcText = styled.div`
  font-size: 12px;
  color: ${COLOR.RED_70};
`;

const PercentsContainer = styled.div`
  justify-content: space-between;
  width: 100%;
`;

const PosEvalQty = styled.p`
  color: ${COLOR.GREEN};
  font-size: 36px;
  font-weight: 700;
`;

const PosEvalQtyDesc = styled.p`
  color: ${COLOR.GREEN_70};
  font-size: 12px;
  text-align: center;
`;

const PosEvalContainer = styled.div`
  position: relative;
  top: -80px;
  align-items: center;
  width: 100%;
`;

const CircleContainer = styled.div`
  height: 160px;
  align-items: center;
`;

const HeaderText = styled.h3`
  color: ${COLOR.WHITE};
  font-size: 16px;
  text-transform: uppercase;
`;

const Container = styled.div`
  align-items: center;
  padding: 15px;
  height: 220px;
`;

export default CommunityTrustTab;
