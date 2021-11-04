import { useEffect, useState } from "react";
import classNames from "classnames";

import { TransactionForm } from "../../components/TransactionForm";
import { TransactionTable } from "../../components/TransactionTable";
import Tabs from "../../components/Tabs/Tabs";

import { categoryTypes } from "../../helpers/constants";
// import s from '../Transactions/Transactions.module.scss';
import { Summary } from "../../components/Summary";
import { useDispatch, useSelector } from "react-redux";
import {
  transactionsOperations,
  transactionsSelectors,
} from "../../redux/transactions";

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
      <div>
        <div>
          <Tabs
            items={tabItems}
            onChange={(item) => setCurrentType(item.value)}
          />
        </div>
        <div style={{backgroundColor: '#fff'}}>
          <TransactionForm type={currentType} />
          <div>
            <TransactionTable type={currentType} />
            <Summary type={currentType} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
