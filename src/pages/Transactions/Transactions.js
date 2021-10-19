import { useEffect, useState } from "react";
import classNames from "classnames";

import Balance from "../../components/Balance";
import { TransactionForm } from "../../components/TransactionForm";
import { TransactionTable } from "../../components/TransactionTable";
import Tabs from "../../components/Tabs/Tabs";

import { categoryTypes } from "../../helpers/constants";
import s from "../Transactions/Transactions.module.scss";
import { Summary } from "../../components/Summary";
import { useDispatch, useSelector } from "react-redux";
import {
  transactionsOperations,
  transactionsSelectors,
} from "../../redux/transactions";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    <div>
      <div className={s.balance}>
        <Balance isHiddenBtn={false} />
      </div>
      <div className={classNames(s.transactions)}>
        <div className={classNames(s.container)}>
          <div className={classNames(s.tabs)}>
            <Tabs
              items={tabItems}
              onChange={(item) => setCurrentType(item.value)}
            />
          </div>
          <div className={s.formWrapper}>
            <TransactionForm type={currentType} />
            <div className={classNames(s.tableWrapper, s.transSummWrapper)}>
              <TransactionTable type={currentType} />

              <div className={s.summaryWrap}>
                <Summary type={currentType} />
              </div>
            </div>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
