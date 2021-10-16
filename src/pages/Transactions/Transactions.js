import TransactionsForm from "../../components/TransactionsForm/TransactionsForm";
import IncomeList from "../../components/Income/IncomeList";
import ExpenseList from "../../components/Expense/ExpenseList";
import Tabs from "../../components/Tabs/Tabs";

import { categoryTypes } from '../../helpers/constants';

// TODO видалити локальні TODO, коли буде BACK
// import IncomeApi from "../../components/Income/api.json";
// import ExpenseApi from "../../components/Expense/api.json";



const Transactions = () => {
  return (
    <>
      <Tabs>
        <div label="Доход">
          <TransactionsForm type={categoryTypes.INCOME}/>
          <IncomeList />
        </div>
        <div label="Расход">
          <TransactionsForm type={categoryTypes.EXPENSE} />
          <ExpenseList />
        </div>
      </Tabs>
    </>
  );
};

export default Transactions;
