import styled from "styled-components";
import { COLOR } from "@/utils/enums/color.enum";
import { useGetConfig } from "@/utils/custom_hooks/useGetConfig";
import { TCircleData } from "@/utils/config/types/TCircleData.type";
import dynamic from "next/dynamic";

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const ExpertsRatingTab = () => {
  const { expertsDataConfig } = useGetConfig("expertsData");

  return (
    <Container className="flex_column rounded_border_20 grey_bg">
      <HeaderContainer className="flex_column">
        <HeaderText>Рейтинг экспертов</HeaderText>
        <DescriptionText>
          Составлен, исходя из&nbsp;информации о&nbsp;транзакциях, держателях,
          создателях и&nbsp;пулах
        </DescriptionText>
      </HeaderContainer>
      {expertsDataConfig && (
        <CircleContainer>
          <ApexCharts
            options={(expertsDataConfig as TCircleData)?.options}
            series={(expertsDataConfig as TCircleData)?.series}
            type="radialBar"
            height={350}
          />
        </CircleContainer>
      )}
    </Container>
  );
};

const CircleContainer = styled.div`
  max-height: 160px;
`;

const DescriptionText = styled.p`
  font-size: 12px;
  color: ${COLOR.WHITE_50};
  text-align: center;
  max-width: 230px;
  @media screen and (max-width: 1280px) {
    max-width: 300px;
  }
`;

const HeaderText = styled.h3`
  color: ${COLOR.WHITE};
  font-size: 16px;
  text-transform: uppercase;
`;

const HeaderContainer = styled.div`
  gap: 5px;
  align-items: center;
`;

const Container = styled.div`
  align-items: center;
  padding: 15px;
`;

export default ExpertsRatingTab;
