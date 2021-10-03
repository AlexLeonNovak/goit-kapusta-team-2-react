import AuthForm from './components/AuthForm/AuthForm';
import IncomeList from "./components/income/incomeList";
import ExpenseList from "./components/expense/expenseList";

// TODO видалити локальні TODO, коли буде BACK
import IncomeApi from "./components/income/api.json";
import expenseApi from "./components/expense/api.json";

import "./App.css";

function App() {
  return (
    <>
    <AuthForm />
      <IncomeList items={IncomeApi} />

      <ExpenseList items={expenseApi} />
    </>

  );
}

export default App;
