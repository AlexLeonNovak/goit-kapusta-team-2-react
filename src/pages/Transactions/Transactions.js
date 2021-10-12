import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { transactionsOperations } from "../../redux/transactions";

import TransactionsMenu from "../../components/TransactionsMenu/TransactionsMenu";
import IncomeList from "../../components/Income/IncomeList";
import ExpenseList from "../../components/Expense/ExpenseList";

import Balance from "../../components/Balance";
import Tabs from "../../components/Tabs/Tabs";

// TODO видалити локальні TODO, коли буде BACK
import IncomeApi from "../../components/Income/api.json";
import ExpenseApi from "../../components/Expense/api.json";

const Transactions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(transactionsOperations.fetchTransactions());
  }, [dispatch]);

  return (
    <>
      <Balance />

      <Tabs>
        <div label="Доход">
          <TransactionsMenu />
          <IncomeList items={IncomeApi} />
        </div>
        <div label="Расход">
          <TransactionsMenu />
          <ExpenseList items={ExpenseApi} />
        </div>
      </Tabs>
    </>
  );
};

export default Transactions;
