import React from 'react';

import DatePick from '../../components/DatePick/DatePicker';
import IncomeList from "../../components/Income/IncomeList";
import ExpenseList from "../../components/Expense/ExpenseList";

import Balance from "../../components/Balance";
import Tabs from "../../components/Tabs/Tabs";

// TODO видалити локальні TODO, коли буде BACK
import IncomeApi from "../../components/Income/api.json";
import ExpenseApi from "../../components/Expense/api.json";

const Transactions = () => {
  return (
    <>
      <Balance />
      <DatePick />

      <Tabs>
        <div label="Доход">
          <IncomeList items={IncomeApi} />
        </div>
        <div label="Расход">
          <ExpenseList items={ExpenseApi} />
        </div>
      </Tabs>
    </>
  );
};

export default Transactions;