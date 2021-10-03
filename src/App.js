import IncomeList from "./components/income/incomeList";
import ExpenseList from "./components/expense/expenseList";

// TODO видалити локальні TODO, коли буде BACK
import Balance from "./components/Balance";
import IncomeApi from "./components/income/api.json";
import expenseApi from "./components/expense/api.json";

import "./App.css";

function App() {
  return (
    <>
      <Balance />

      <IncomeList items={IncomeApi} />

      <ExpenseList items={expenseApi} />
    </>
  );
}

export default App;
