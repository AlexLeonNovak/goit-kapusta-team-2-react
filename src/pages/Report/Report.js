import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { reportsOperations } from "../../redux/reports";
import SwiperReport from "../../components/Swiper/SwiperReport";
import Accounting from "../../components/Accounting/Accounting";
import Chartjs from "../../components/Chartjs/Chartjs";

import Balance from "../../components/Balance/Balance";

import styles from "./Report.module.scss";

function Report() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reportsOperations.fetchReports());
  }, [dispatch]);

  return (
    <>
      <div className={styles.categories}>
        <Balance />
        <div className={styles.dataline}>
          <div className={styles.dataline_block_expenses}>
            <span className={styles.dataline_label}>Расходы:</span>
            <span className={styles.dataline_expenses}>-18 000.00</span>
          </div>
          <span className={styles.datalineJumper} />
          <div className={styles.dataline_block_income}>
            <span className={styles.dataline_label}>Доходы:</span>
            <span className={styles.dataline_income}>+45 000.00</span>
          </div>
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
      </div>
    </>
  );
}

export default Report;
