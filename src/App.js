import AuthForm from './components/AuthForm/AuthForm';

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
