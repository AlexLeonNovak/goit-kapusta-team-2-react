import TransactionsForm from "../../components/TransactionsForm/TransactionsForm";
import IncomeList from "../../components/Income/IncomeList";
import ExpenseList from "../../components/Expense/ExpenseList";
import Tabs from "../../components/Tabs/Tabs";

import s from "../Transactions/Transactions.module.scss";
import classNames from "classnames";
import { categoryTypes } from '../../helpers/constants';

// TODO видалити локальні TODO, коли буде BACK
// import IncomeApi from "../../components/Income/api.json";
// import ExpenseApi from "../../components/Expense/api.json";



const Transactions = () => {
  return (
    <div className={classNames(s.container, s.transWrapper )}>
      <Tabs>
        <div label="ДОХОД">
          <TransactionsForm type={categoryTypes.INCOME}/>
          <IncomeList />
        </div>
        <div label="РАСХОД">
          <TransactionsForm type={categoryTypes.EXPENSE} />
          <ExpenseList />
        </div>
      </Tabs>
    </div>
  );
};

export default Transactions;
