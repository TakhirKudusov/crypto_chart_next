import styled from "styled-components";
import ChartHeader from "@/components/coin_page/ChartHeader";
import { useGetConfig } from "@/utils/custom_hooks/useGetConfig";
import { TChartData } from "@/utils/config/types/TChartData.type";
import dynamic from "next/dynamic";
import { chartDataConfig as sampleData } from "@/utils/config/0x2170ed0880ac9a755fd29b2688956bd959f933f8/chartData.config";

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });
const ChartTab = () => {
  const { chartDataConfig } = useGetConfig("chartData");

  return (
    <Container className="flex_column rounded_border_20 grey_bg">
      <ChartHeader />
      <ApexCharts
        options={(chartDataConfig as TChartData)?.options ?? sampleData}
        series={(chartDataConfig as TChartData)?.series ?? sampleData}
        type="candlestick"
        height={475}
      />
    </Container>
  );
};

const Container = styled.div``;
export default ChartTab;
