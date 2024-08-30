import React from "react";
import ApexCharts from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const GenerationDemand: React.FC = () => {
  const chartOptions: ApexOptions = {
    chart: {
      id: "electricity-comparison",
      type: "line",
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      title: {
        text: "Time Period",
        style: {
          color: "#FFFFFF",
        },
      },
      labels: {
        style: {
          colors: "#FFFFFF",
        },
      },
    },
    yaxis: {
      title: {
        text: "Electricity (MWh)",
        style: {
          color: "#FFFFFF",
        },
      },
      labels: {
        style: {
          colors: "#FFFFFF",
        },
      },
    },
    title: {
      text: "Electricity Generation vs Demand",
      align: "center",
      style: {
        color: "#FFFFFF",
      },
    },
    stroke: {
      curve: "smooth",
    },
    markers: {
      size: 5,
    },
    tooltip: {
      shared: true,
      intersect: false,
      theme: "dark",
      style: {
        fontSize: "12px",
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      labels: {
        colors: "#FFFFFF",
      },
    },
  };

  const chartSeries = [
    {
      name: "Electricity Generation",
      data: [30, 40, 35, 50, 49, 60, 70],
    },
    {
      name: "Electricity Demand",
      data: [20, 30, 25, 45, 40, 55, 65],
    },
  ];

  return (
    <div className="shadow-lg">
      <ApexCharts
        options={chartOptions}
        series={chartSeries}
        type="line"
        height={350}
      />
    </div>
  );
};

export default GenerationDemand;
