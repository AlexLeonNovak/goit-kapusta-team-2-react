import Auth from "./pages/Auth/Auth";
import AuthForm from "./components/AuthForm/AuthForm";
import IncomeList from "./components/Income/IncomeList";
import ExpenseList from "./components/Expense/ExpenseList";
import HomeView from "./views/Home/HomeView";
import Balance from "./components/Balance";
import Tabs from "./components/Tabs/Tabs";

// TODO видалити локальні TODO, коли буде BACK
import IncomeApi from "./components/Income/api.json";
import ExpenseApi from "./components/Expense/api.json";

function App() {
  return (
    <>
      <Auth />
      <HomeView />
      <AuthForm />
      <Balance />

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
