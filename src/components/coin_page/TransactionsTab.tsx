import styled from "styled-components";
import { COLOR } from "@/utils/enums/color.enum";
import { useGetConfig } from "@/utils/custom_hooks/useGetConfig";
import { transactionDataConfig } from "@/utils/config/eth/transactionData.config";
import { TTransactionData } from "@/utils/config/types/TTransactionData.type";
import { useEffect, useState } from "react";

const TransactionsTab = () => {
  const [values, setValues] = useState<TTransactionData[]>([]);

  const { transactionDataConfig } = useGetConfig("transactionData");

  useEffect(() => {
    if (transactionDataConfig) {
      setValues(transactionDataConfig as TTransactionData[]);
    }
  }, [transactionDataConfig]);

  const handleSortClick = (command: "all" | "buying" | "selling") => () => {
    switch (command) {
      case "all":
        setValues(transactionDataConfig as TTransactionData[]);
        break;
      case "buying":
        const buyingData = (
          transactionDataConfig as TTransactionData[]
        )?.filter((el) => el.type === "buying");
        setValues(buyingData);
        break;
      case "selling":
        const sellingData = (
          transactionDataConfig as TTransactionData[]
        )?.filter((el) => el.type === "selling");
        setValues(sellingData);
        break;
    }
  };

  return (
    <Container className="flex_column rounded_border_20 grey_bg">
      <Header className="flex">
        <LabelsContainer className="flex">
          <Label onClick={handleSortClick("all")}>Все операции</Label>
          <Label onClick={handleSortClick("buying")}>Покупка</Label>
          <Label onClick={handleSortClick("selling")}>Продажа</Label>
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
        <DataGridBody className="flex_column">
          {values?.map((el, i) => {
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
  min-width: 728px;
`;

const DataGridLabel = styled.p`
  color: ${COLOR.WHITE};
  font-weight: 500;
  flex-grow: 1;
  justify-content: center;
`;

const DataGridHeader = styled.div`
  padding: 10px;
  background-color: ${COLOR.WHITE_05};
  min-width: 728px;
`;

const DataGridContainer = styled.div`
  gap: 2px;
  @media screen and (max-width: 769px) {
    overflow: auto;
  }
`;

const HeaderSubText = styled.p`
  font-size: 14px;
  color: ${COLOR.WHITE_50};
`;

const Label = styled.h5`
  font-size: 16px;
  color: ${COLOR.WHITE};
  cursor: pointer;
  transition: 0.15s linear;
  @media screen and (max-width: 769px) {
    font-size: 14px;
  }
  &:hover {
    color: ${COLOR.WHITE_75};
  }
`;

const LabelsContainer = styled.div`
  gap: 2rem;
`;

const Header = styled.div`
  padding: 22px 25px 20px;
  justify-content: space-between;
  @media screen and (max-width: 769px) {
    flex-direction: column-reverse;
    gap: 1rem;
    padding: 16px 19px 14px;
  }
`;

const Container = styled.div`
  min-height: 100px;
  overflow: hidden;
`;
export default TransactionsTab;
