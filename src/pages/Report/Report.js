import SwiperReport from "../../components/Swiper/SwiperReport";
import Accounting from "../../components/Accounting/Accounting";
import Chartjs from "../../components/Chartjs/Chartjs";

import s from "./Report.module.scss";
import {TotalTransactionsSum} from '../../components/TotalTransactionsSum';

function Report() {
  return (
    <>
      <div className={s.categories}>
        <div className={s.dataline}>
          <TotalTransactionsSum />
        </div>
        <div className={s.expencesBlock}>
          <SwiperReport />
          <Accounting />
        </div>
        <div className={s.expencesBlock}>
          <div className={s.chartBlock}>
            <Chartjs />
          </div>
        </div>
      </div>
    </>
  );
}

export default Report;
