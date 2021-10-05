import React, { Suspense, lazy, useEffect } from 'react';

import authOperations from './redux/auth/auth-operations';
import { useDispatch } from 'react-redux';

import Header from './pages/Header/Header';
import Auth from './pages/Auth/Auth';
import IncomeList from "./components/income/incomeList";
import ExpenseList from "./components/expense/expenseList";
import Balance from "./components/Balance";


// TODO видалити локальні TODO, коли буде BACK
import IncomeApi from './components/income/api.json';
import expenseApi from './components/expense/api.json';


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
      <IncomeList items={IncomeApi} />
      <ExpenseList items={expenseApi} />
    </>
  );
}

export default App;
