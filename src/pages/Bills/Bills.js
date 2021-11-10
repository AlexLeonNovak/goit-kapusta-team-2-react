import { walletsSelectors } from "../../redux/wallets";
import { useSelector } from "react-redux";
import { Loader } from "../../components/Loader";
import React from "react";
import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

import { BillsForm } from "../../components/BillsForm";
import { BillsList } from "../../components/BillsList";
import { LinkToReport } from "../../components/LinkToReport";
// import Balance from "../../components/Balance";
import s from "./Bills.module.scss";
// import styles from "./Swiper.module.scss";

const Bills = () => {
  const isLoading = useSelector(walletsSelectors.getLoading);

  return (
    <div className={s.wrapper}>
      {isLoading && <Loader />}
      <section className={s.navigation}>
        <LinkToReport />
      </section>
      <div className={s.billsTitle}>
        <h2>Счета</h2>
      </div>
      <div className={s.Bills}>
        <BillsForm />
        <BillsList />
        <ToastContainer />
      </div>
    </div>
  );
};

export default Bills;
