import { useState } from "react";
import { TransactionForm } from "../../components/TransactionForm";

import { TransactionTable } from "../../components/TransactionTable";
import Tabs from "../../components/Tabs/Tabs";
import { categoryTypes } from "../../helpers/constants";
import s from './Transactions.module.scss';
import { Summary } from "../../components/Summary";
import {LinkToReport} from '../../components/LinkToReport';

const Transactions = () => {

  const tabItems = [
    {
      label: "Расход",
      value: categoryTypes.EXPENSE,
    },
    {
      label: "Доход",
      value: categoryTypes.INCOME,
    },
  ];

  const [currentType, setCurrentType] = useState(categoryTypes.EXPENSE);

  return (
    <div className={s.wrapper}>
        <section className={s.navigation}>
          <LinkToReport />
        </section>
          <Tabs
            items={tabItems}
            onChange={(item) => setCurrentType(item.value)}
          />
        <section className={s.Transactions}>
          <TransactionForm type={currentType} />
          <div className={s.Tables}>
            <TransactionTable type={currentType} />
            <Summary type={currentType} />
          </div>
        </section>
    </div>
  );
};

export default Transactions;
