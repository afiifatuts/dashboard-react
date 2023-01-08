import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Category,Tooltip,ColumnSeries,
  Legend,
  DataLabel, BarSeries
} from "@syncfusion/ej2-react-charts";

import { Header } from "../../components";

import {
  barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis,
} from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

function Bar() {
  const { currentMode } = useStateContext();

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg ">
     
      <Header category="Bar" title="Inflation Rate in Percentage" />
      <div className='w-full'>
      <ChartComponent
        id="area-chart"
        height="420px"
        primaryXAxis={barPrimaryXAxis}
        primaryYAxis={barPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === "Dark" ? "#33373e" : "#fff"}
      >
        <Inject services={[DataLabel,BarSeries, Tooltip , Category, ColumnSeries, Legend]} />
        <SeriesCollectionDirective>
          {barCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
      </div>
    </div>
  );
}

export default Bar;
