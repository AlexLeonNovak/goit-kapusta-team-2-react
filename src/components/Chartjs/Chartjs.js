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
};

const options = {
  indexAxis: "",
  barWidth: 605,
  maxBarThickness: 38,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
  },
  elements: {
    bar: {
      borderRadius: 10,
    },
  },
};

const mediaQueryList = window.matchMedia("(max-width: 767px)");
console.log(mediaQueryList);

function handleOrientationChange(mql) {
  mql.matches ? (options.indexAxis = "y") : (options.indexAxis = "x");
}

handleOrientationChange(mediaQueryList);

mediaQueryList.addEventListener("change", handleOrientationChange);

// if (window.matchMedia("(max-width: 767px)").matches) {
//   options.indexAxis = "y";
// } else {
//   options.indexAxis = "x";
// }

const Chartjs = () => (
  <>
    <Bar data={data} options={options} />
  </>
);

export default Chartjs;
