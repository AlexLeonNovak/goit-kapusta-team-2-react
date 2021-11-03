import { useSelector } from 'react-redux';
import { transactionsSelectors } from '../../redux/transactions';
import './TotalTransactionsSum.scss';

export const TotalTransactionsSum = () => {
  const expense = useSelector(transactionsSelectors.getExpenseSum);
  const income = useSelector(transactionsSelectors.getIncomeSum);
  return (
    <div className='summary'>
      <div className='block blockExpenses'>
        <span className='label labelLeftBias'>Расходы:</span>
        <span className='expenses'>-{expense} грн.</span>
      </div>
      <span />
      <div className='block blockIncome'>
        <span className='label'>Доходы:</span>
        <span className='income'>+{income} грн.</span>
      </div>
    </div>
  );
};
