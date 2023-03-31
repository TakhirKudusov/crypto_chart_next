import styled from "styled-components";
import { Exchange } from "@styled-icons/remix-fill/Exchange";
import { COLOR } from "@/utils/enums/color.enum";
import { FC, memo } from "react";

type Props = {
  className?: string;
};
const Button: FC<Props> = ({ className }) => {
  return (
    <StyledButton className={"rounded_border_100 flex " + className}>
      <ButtonText>Buy</ButtonText>
      <ExchangeIcon />
    </StyledButton>
  );
};

const ExchangeIcon = styled(Exchange)`
  width: 21px;
  height: 21px;
`;

const ButtonText = styled.span`
  font-weight: 900;
  font-size: 16px;
`;

const StyledButton = styled.button`
  text-transform: uppercase;
  height: 72px;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: ${COLOR.BLUE};
  gap: 10px;
  cursor: pointer;
  transition: 0.15s linear;
  width: 300px;
  &:hover {
    background-color: ${COLOR.BLUE_HOVER};
  }
  &:active {
    background-color: ${COLOR.BLUE_ACTIVE};
  }
  @media screen and (max-width: 1280px) {
    min-width: 100%;
  }
  @media screen and (max-width: 769px) {
    position: fixed;
    bottom: 0;
    z-index: 1;
    margin: 0 0 1rem;
    min-width: unset;
    width: calc(100% - 4rem);
  }
`;
export default memo(Button);
