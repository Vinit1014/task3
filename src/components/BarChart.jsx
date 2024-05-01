import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const data = {
    labels: ["Flour", "Butter", "Sugar", "Eggs"],
    datasets: [
      {
        label: "Croissants",
        data: [3, 2, 0, 0],
        backgroundColor: "#FFA500",
      },
      {
        label: "Pancakes",
        data: [1, 1, 2, 3],
        backgroundColor: "#808080",
      },
      {
        label: "Cookies",
        data: [2, 1, 0, 0],
        backgroundColor: "#FFD700",
      },
      {
        label: "Doughnuts",
        data: [0, 0, 1, 1],
        backgroundColor: "#8B4513",
      },
    ],
  };

  const options = {
    indexAxis: "y",
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
