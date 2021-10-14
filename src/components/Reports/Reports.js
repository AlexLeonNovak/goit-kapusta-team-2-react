import React from "react";
import SwiperReport from "./Swiper/SwiperReport";
import Accounting from "./Swiper/SwiperComponents/Accounting";
import Chartjs from "./Chartjs/Chartjs";

import styles from "./Reports.module.scss";

function Report() {
  return (
    <>
      <div className={styles.dataLine}>
        <span className={styles.dataLine_expenses}>Расходы: -18 000.00</span>
        <span className={styles.dataLineJumper} />
        <span className={styles.dataLine_income}>Доходы: +45 000.00</span>
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
