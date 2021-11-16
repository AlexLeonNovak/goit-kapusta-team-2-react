import React from "react";
import { useSelector } from "react-redux";

import { walletsSelectors } from "../../redux/wallets";
import { Loader } from "../../components/Loader";
import { BillsForm } from "../../components/BillsForm";
import { BillsList } from "../../components/BillsList";
import { LinkToReport } from "../../components/LinkToReport";
import s from "./Bills.module.scss";

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
      <section className={s.billsWrapper}>
        <BillsForm />
        <BillsList />
      </section>
    </div>
  );
};

export default Bills;
