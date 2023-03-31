import styled from "styled-components";
import { COLOR } from "@/utils/enums/color.enum";
import { useGetConfig } from "@/utils/custom_hooks/useGetConfig";
import { TInformation } from "@/utils/config/types/TInformation.type";

const InfoTab = () => {
  const { informationConfig } = useGetConfig("information");

  return (
    <InfoContainer className="flex_column rounded_border_20">
      {(informationConfig as TInformation[])?.map((el) => (
        <InfoBadge
          key={el.name}
          className="flex rounded_border_20"
          color={el.bgColor}
        >
          <Text color={el.nameFontColor}>{el.name}</Text>
          <Text color={el.valueFontColor}>{el.value}</Text>
        </InfoBadge>
      ))}
    </InfoContainer>
  );
};

const Text = styled.p<{ color?: COLOR }>`
  font-size: 14px;
  line-height: 20px;
  color: ${({ color }) => color};
`;

const InfoBadge = styled.div<{ color: COLOR }>`
  padding: 0 20px;
  background-color: ${({ color }) => color};
  justify-content: space-between;
  align-items: center;
  height: 24px;
  gap: 10px;
  @media screen and (max-width: 1280px) {
    height: 66px;
  }
`;

const InfoContainer = styled.div`
  border: ${COLOR.BLUE} 2px solid;
  padding: 5px;
  gap: 5px;
  width: 100%;
`;

export default InfoTab;
