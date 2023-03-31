import styled from "styled-components";
import ChartHeader from "@/components/coin_page/ChartHeader";
import { useGetConfig } from "@/utils/custom_hooks/useGetConfig";
import { TChartData } from "@/utils/config/types/TChartData.type";
import dynamic from "next/dynamic";

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });
const ChartTab = () => {
  const { chartDataConfig } = useGetConfig("chartData");

  return (
    <Container className="flex_column rounded_border_20 grey_bg">
      <ChartHeader />
      {chartDataConfig && (
        <ApexCharts
          options={(chartDataConfig as TChartData)?.options}
          series={(chartDataConfig as TChartData)?.series}
          type="candlestick"
          height={475}
        />
      )}
    </Container>
  );
};

const Container = styled.div``;
export default ChartTab;
