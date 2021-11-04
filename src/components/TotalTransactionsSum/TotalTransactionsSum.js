import { useSelector } from 'react-redux';
import { transactionsSelectors } from '../../redux/transactions';
import s from './TotalTransactionsSum.module.scss';

export const TotalTransactionsSum = () => {
  const expense = useSelector(transactionsSelectors.getExpenseSum);
  const income = useSelector(transactionsSelectors.getIncomeSum);
  return (
    <div className={s.summary}>
      <div className={`${s.block} ${s.blockExpenses}`}>
        <span className={`${s.label} ${s.labelLeftBias}`}>Расходы:</span>
        <span className={s.expenses}>-{expense} грн.</span>
      </div>
      <span />
      <div className={`${s.block} ${s.blockIncome}`}>
        <span className={s.label}>Доходы:</span>
        <span className={s.income}>+{income} грн.</span>
      </div>
    </div>
  );
};
