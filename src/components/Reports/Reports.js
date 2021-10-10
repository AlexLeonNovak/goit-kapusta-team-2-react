import React from "react";
import styles from "./Report.module.css";
import SwiperReport from "./Swiper/SwiperReport";
import Accounting from "./Swiper/SwiperComponents/Accounting";

function Report() {
  return (
    <>
      <div className={styles.dataLine}>
        <span className={styles.dataLine_expenses}>Расходы: -18 000.00</span>
        <span className={styles.dataLineJumper}></span>
        <span className={styles.dataLine_income}>Доходы: +45 000.00</span>
      </div>
      <div className={styles.expencesBlock}>
        <SwiperReport />
        <Accounting />
      </div>
    </>
  );
}

export default Report;
