import AuthForm from "./components/AuthForm/AuthForm";
import IncomeList from "./components/income/incomeList";
import ExpenseList from "./components/expense/expenseList";
import HomeView from './views/Home/HomeView';
import Balance from "./components/Balance";

// TODO видалити локальні TODO, коли буде BACK
import IncomeApi from "./components/income/api.json";
import expenseApi from "./components/expense/api.json";

import "./App.css";

function App() {
  return (
    <>
	    <HomeView />
      <AuthForm />
      <Balance />
      <IncomeList items={IncomeApi} />
      <ExpenseList items={expenseApi} />
    </>
  );
}

export default App;
