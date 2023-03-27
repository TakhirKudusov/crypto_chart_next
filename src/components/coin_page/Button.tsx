import styled from "styled-components";
import { Exchange } from "@styled-icons/remix-fill/Exchange";
import { COLOR } from "@/utils/enums/color.enum";

const Button = () => {
  return (
    <StyledButton className="rounded_border_100 flex">
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
`;
export default Button;
