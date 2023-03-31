import styled from "styled-components";
import { COLOR } from "@/utils/enums/color.enum";
import { Like, Dislike } from "@styled-icons/boxicons-regular";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const AssessmentTab = () => {
  const [mounted, setMounted] = useState(false);

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => setMounted(true), 1000);
  }, []);

  const handleButtonClick = () => {
    setVisible(false);
  };

  return (
    <Container
      visible={visible}
      className="flex_column rounded_border_20 grey_bg"
    >
      <HeaderText>Ваша оценка</HeaderText>
      <IconsContainer className="flex">
        <IconContainer
          mounted={mounted}
          className="rounded_border_100"
          color={COLOR.RED_10}
          onClick={handleButtonClick}
        >
          <DislikeIcon />
        </IconContainer>
        <IconContainer
          mounted={mounted}
          className="rounded_border_100"
          color={COLOR.GREEN_10}
          onClick={handleButtonClick}
        >
          <LikeIcon />
        </IconContainer>
      </IconsContainer>
    </Container>
  );
};

const DislikeIcon = styled(Dislike)`
  color: ${COLOR.RED};
  width: 20px;
  height: 20px;
`;

const LikeIcon = styled(Like)`
  color: ${COLOR.GREEN};
  width: 20px;
  height: 20px;
`;

const IconsContainer = styled.div`
  gap: 1rem;
`;

const IconContainer = styled.div<{ color: COLOR; mounted: boolean }>`
  display: ${({ mounted }) => (mounted ? "flex" : "none")};
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color};
  cursor: pointer;
  transition: 0.3s linear;

  &:hover {
    background-color: ${({ color }) =>
      color === COLOR.GREEN_10 ? COLOR.GREEN_20 : COLOR.RED_20};
  }
`;

const HeaderText = styled.h3`
  color: ${COLOR.WHITE};
  font-size: 16px;
  text-transform: uppercase;
`;

const Container = styled.div<{ visible: boolean }>`
  padding: 15px;
  align-items: center;
  gap: 1rem;
  display: ${({ visible }) => !visible && "none"};
`;

export default AssessmentTab;
