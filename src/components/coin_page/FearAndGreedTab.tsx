import styled from "styled-components";
import { COLOR } from "@/utils/enums/color.enum";
import dynamic from "next/dynamic";
import { useGetConfig } from "@/utils/custom_hooks/useGetConfig";
import { TCircleData } from "@/utils/config/types/TCircleData.type";

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const FearAndGreedTab = () => {
  const { fearAndGreedDataConfig } = useGetConfig("fearAndGreedData");

  return (
    <Container className="flex_column rounded_border_20 grey_bg">
      <HeaderText>Индекс страха и&nbsp;жадности</HeaderText>
      {fearAndGreedDataConfig && (
        <CircleContainer>
          <ApexCharts
            options={(fearAndGreedDataConfig as TCircleData)?.options}
            series={(fearAndGreedDataConfig as TCircleData)?.series}
            type="radialBar"
            height={350}
          />
        </CircleContainer>
      )}
      <DescText>Валюта недооценена &mdash; пора покупать!</DescText>
      <SubDescText>Рекомендовано &quot;DeFi Navigator&quot;</SubDescText>
    </Container>
  );
};

const CircleContainer = styled.div`
  max-height: 160px;
`;

const SubDescText = styled.p`
  font-size: 12px;
  color: ${COLOR.WHITE_50};
`;

const DescText = styled.p`
  color: ${COLOR.WHITE};
  max-width: 250px;
  text-align: center;
`;

const HeaderText = styled.h3`
  color: ${COLOR.WHITE};
  font-size: 16px;
  text-transform: uppercase;
  max-width: 150px;
  text-align: center;
`;

const Container = styled.div`
  align-items: center;
  padding: 15px;
  gap: 5px;
`;

export default FearAndGreedTab;
