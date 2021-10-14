import React from "react";
import SwiperReport from "./Swiper/SwiperReport";
import Accounting from "./Swiper/SwiperComponents/Accounting";
import Chartjs from "./Chartjs/Chartjs";

import styles from "./Reports.module.scss";
import {useSelector} from 'react-redux';
import {transactionsSelectors} from '../../redux/transactions';

function Report() {
  const incomeSum = useSelector(transactionsSelectors.getIncomeSum);
  const expenseSum = useSelector(transactionsSelectors.getExpenseSum);
  return (
    <>
      <div className={styles.dataLine}>
        <span className={styles.dataLine_expenses}>Расходы: -{incomeSum}</span>
        <span className={styles.dataLineJumper} />
        <span className={styles.dataLine_income}>Доходы: +{expenseSum}</span>
      </div>
      <div className={styles.expencesBlock}>
        <SwiperReport />
        <Accounting />
      </div>
      <div className={styles.chartBlock}>
        <Chartjs
          width={605}
          height={328}
          options={{
            maintainAspectRatio: false,
          }}
        />
      </div>
    </>
  );
}

export default Report;
