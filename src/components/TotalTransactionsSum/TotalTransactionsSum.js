import {useSelector} from 'react-redux';
import {transactionsSelectors} from '../../redux/transactions';
import s from './TotalTransactionsSum.module.scss';

export const TotalTransactionsSum = () => {
	const expense = useSelector(transactionsSelectors.getExpenseSum)
	const income = useSelector(transactionsSelectors.getIncomeSum)
	return (
		<>
			<div className={s.block_expenses}>
				<span className={s.label}>Расходы:</span>
				<span className={s.expenses}>-{expense}</span>
			</div>
			<span className={s.splitter} />
			<div className={s.block_income}>
				<span className={s.label}>Доходы:</span>
				<span className={s.income}>+{income}</span>
			</div>
		</>
	)
}
