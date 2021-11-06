import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TransactionForm } from "../../components/TransactionForm";

import { TransactionTable } from "../../components/TransactionTable";
import Tabs from "../../components/Tabs/Tabs";
import { categoryTypes } from "../../helpers/constants";
import s from './Transactions.module.scss';
import { Summary } from "../../components/Summary";
import {
  transactionsOperations,
  transactionsSelectors,
} from "../../redux/transactions";
import {LinkToReport} from '../../components/LinkToReport';

const Transactions = () => {
  const dispatch = useDispatch();
  const year = useSelector(transactionsSelectors.getYear);
  const month = useSelector(transactionsSelectors.getMonth);

  useEffect(() => {
    const date = new Date();
    if (date.getMonth() + 1 !== month || date.getFullYear() !== year) {
      dispatch(transactionsOperations.fetchTransactions());
    }
  }, [dispatch, month, year]);

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
