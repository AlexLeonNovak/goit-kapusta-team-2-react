import { useSelector } from "react-redux";
import { transactionsSelectors } from "../../redux/transactions";
// import s from "./TotalTransactionsSum.module.scss";

export const TotalTransactionsSum = () => {
  const expense = useSelector(transactionsSelectors.getExpenseSum);
  const income = useSelector(transactionsSelectors.getIncomeSum);
  return (
    <div>
      <div>
        <span>Расходы:</span>
        <span>-{expense} грн.</span>
      </div>
      <div>
        <span>Доходы:</span>
        <span>+{income} грн.</span>
      </div>
    </div>
  );
};
