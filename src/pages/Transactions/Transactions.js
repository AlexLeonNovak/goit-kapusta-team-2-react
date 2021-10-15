import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { transactionsOperations } from "../../redux/transactions";

import TransactionsForm from "../../components/TransactionsForm/TransactionsForm";
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
          <TransactionsForm />
          <IncomeList items={IncomeApi} />
        </div>
        <div label="Расход">
          <TransactionsForm />
          <ExpenseList items={ExpenseApi} />
        </div>
      </Tabs>
    </>
  );
};

export default Transactions;
