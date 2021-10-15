import React from "react";
import { Bar } from "react-chartjs-2";

import bd from "./db";

const label = [];
const prices = [];

function toCharData(arr) {
  arr.forEach((item) => {
    for (const key in item) {
      if (key === "name") {
        label.push(item[key]);
      }
      if (key === "price") {
        prices.push(+item[key]);
      }
    }
  });
}

toCharData(bd);

// console.log("labels: ", label);
// console.log("prices: ", prices);

const data = {
  labels: [...label],
  datasets: [
    {
      data: [...prices],
      backgroundColor: ["#FF751D", "#FFDAC0", "#FFDAC0"],
      borderWidth: 0,
    },
  ],
  options: {
    indexAxis: "y",
  },
};

const options = {
  // indexAxis: "y",
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const Chartjs = () => (
  <>
    <Bar data={data} options={options} />
  </>
);

export default Chartjs;
