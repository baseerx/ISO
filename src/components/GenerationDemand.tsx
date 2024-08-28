import React from "react";
import ApexCharts from "react-apexcharts";

const GenerationDemand = () => {
  const chartOptions = {
    chart: {
      id: "electricity-comparison",
      type: "line",
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], // Example months or time periods
      title: {
        text: "Time Period",
        style: {
          color: "#FFFFFF", // Set x-axis title color
        },
      },
      labels: {
        style: {
          colors: "#FFFFFF", // Set x-axis labels color
        },
      },
    },
    yaxis: {
      title: {
        text: "Electricity (MWh)", // Example unit
        style: {
          color: "#FFFFFF", // Set y-axis title color
        },
      },
      labels: {
        style: {
          colors: "#FFFFFF", // Set y-axis labels color
        },
      },
    },
    title: {
      text: "Electricity Generation vs Demand",
      align: "center",
      style: {
        color: "#FFFFFF", // Set chart title color
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
      theme:'dark',
      style: {
        fontSize: "12px",
        color: "#000", // Set tooltip text color
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      labels: {
        colors: "#FFFFFF", // Set legend text color
      },
    },
  };

  const chartSeries = [
    {
      name: "Electricity Generation",
      data: [30, 40, 35, 50, 49, 60, 70], // Example data
    },
    {
      name: "Electricity Demand",
      data: [20, 30, 25, 45, 40, 55, 65], // Example data
    },
  ];

  return (
    <div>
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
