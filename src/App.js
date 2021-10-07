import React, { Suspense, lazy, useEffect } from 'react';

import authOperations from './redux/auth/auth.operations';
import { useDispatch } from 'react-redux';

import Header from './pages/Header/Header';
import Auth from "./pages/Auth/Auth";
import DatePick from './components/DatePick/DatePicker';
import IncomeList from "./components/Income/IncomeList";
import ExpenseList from "./components/Expense/ExpenseList";

import Balance from "./components/Balance";
import Tabs from "./components/Tabs/Tabs";


// TODO видалити локальні TODO, коли буде BACK
import IncomeApi from "./components/Income/api.json";
import ExpenseApi from "./components/Expense/api.json";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Auth />
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
}

export default App;
