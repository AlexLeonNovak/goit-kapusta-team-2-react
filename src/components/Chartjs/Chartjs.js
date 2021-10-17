import { Bar } from "react-chartjs-2";
import {useSelector} from 'react-redux';
import {transactionsSelectors} from '../../redux/transactions'

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


const Chartjs = ({category}) => {
  const transactions = useSelector(transactionsSelectors.getTransactionsByCategoryId(category));
  // console.log(transactions);
  const labels = [];
  const amounts = [];

  transactions.forEach(transaction => {
    const labelIdx = labels.indexOf(transaction.description);
    if (labelIdx !== -1) {
      amounts[labelIdx] += transaction.amount;
    } else {
      labels.push(transaction.description);
      amounts.push(transaction.amount)
    }
  })

  const data = {
    labels: [...labels],
    datasets: [
      {
        data: [...amounts],
        backgroundColor: ["#FF751D", "#FFDAC0", "#FFDAC0"],
        borderWidth: 0,
      },
    ],
  };

  return (
    <>
      <Bar data={data} options={options} />
    </>
  );
}

export default Chartjs;
