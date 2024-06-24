import React from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// "#87CEEB",

const BarGraph = ({
  labels,
  dataArray,
  labelText,
  bgColor,
  borderColor,
  title,
  header,
}) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: labelText,
        data: dataArray,
        backgroundColor: bgColor,
        borderColor: borderColor,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        align: "end",
      },
      title: {
        display: true,
        text: title,
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };
  return (
    <div className="w-full flex flex-col min-h-[450px] p-8 bg-richblack-800 rounded-xl mt-10 border border-richblack-700">
      <p className="text-2xl font-semibold text-white">{header}</p>
      {/* <Bar data={data} options={options}></Bar> */}
      <Line data={data} options={options}></Line>
    </div>
  );
};

export default BarGraph;
