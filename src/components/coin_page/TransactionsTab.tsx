import styled from "styled-components";
import { COLOR } from "@/utils/enums/color.enum";
import { useGetConfig } from "@/utils/custom_hooks/useGetConfig";
import { transactionDataConfig } from "@/utils/config/eth/transactionData.config";
import { TTransactionData } from "@/utils/config/types/TTransactionData.type";

const TransactionsTab = () => {
  const { transactionDataConfig } = useGetConfig("transactionData");

  return (
    <Container className="flex_column rounded_border_20 grey_bg">
      <Header className="flex">
        <LabelsContainer className="flex">
          <Label>Все операции</Label>
          <Label>Покупка</Label>
          <Label>Продажа</Label>
        </LabelsContainer>
        <HeaderSubText>Последние 50 операций</HeaderSubText>
      </Header>
      <DataGridContainer className="flex_column">
        <DataGridHeader className="flex">
          <DataGridLabel className="flex">Кол-во</DataGridLabel>
          <DataGridLabel className="flex">Объем</DataGridLabel>
          <DataGridLabel className="flex">Цена</DataGridLabel>
          <DataGridLabel className="flex">Время</DataGridLabel>
          <DataGridLabel className="flex">Тр-ия</DataGridLabel>
        </DataGridHeader>
        <DataGridBody>
          {(transactionDataConfig as TTransactionData[])?.map((el, i) => {
            return (
              <DataGridRow key={i} color={el.bgColor} className="flex">
                <DataGridText className="flex" color={el.fontColor}>
                  {el.qty}
                  <TokenNameSpan>{el.token}</TokenNameSpan>
                </DataGridText>
                <DataGridText className="flex" color={el.fontColor}>
                  {el.amount}
                </DataGridText>
                <DataGridText className="flex">{el.price}</DataGridText>
                <DataGridText className="flex">{el.time}</DataGridText>
                <DataGridText className="flex" isTx={true}>
                  {el.tx}
                </DataGridText>
              </DataGridRow>
            );
          })}
        </DataGridBody>
      </DataGridContainer>
    </Container>
  );
};

const TokenNameSpan = styled.span`
  margin-left: 5px;
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
`;

const DataGridText = styled.p<{ color?: COLOR; isTx?: boolean }>`
  font-weight: 500;
  flex-grow: 1;
  justify-content: center;
  align-items: flex-end;
  color: ${({ color }) => color ?? COLOR.WHITE_75};
  text-decoration: ${({ isTx }) => isTx && "underline"};
`;

const DataGridRow = styled.div<{ color: COLOR }>`
  padding: 10px;
  background-color: ${({ color }) => color};
`;

const DataGridBody = styled.div`
  gap: 1px;
`;

const DataGridLabel = styled.p`
  color: ${COLOR.WHITE_SECONDARY};
  font-weight: 500;
  flex-grow: 1;
  justify-content: center;
`;

const DataGridHeader = styled.div`
  padding: 10px;
  background-color: ${COLOR.WHITE_05};
`;

const DataGridContainer = styled.div`
  gap: 2px;
`;

const HeaderSubText = styled.p`
  font-size: 14px;
  color: ${COLOR.WHITE_50};
`;

const Label = styled.h5`
  font-size: 16px;
  color: ${COLOR.WHITE_SECONDARY};
`;

const LabelsContainer = styled.div`
  gap: 2rem;
`;

const Header = styled.div`
  padding: 22px 25px 20px;
  justify-content: space-between;
`;

const Container = styled.div`
  min-height: 100px;
`;
export default TransactionsTab;
