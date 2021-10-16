import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {transactionsOperations, transactionsSelectors} from '../../redux/transactions';

import './TransactionTable.css';
import s from '../CategoriesList/CategoriesList.module.scss';
import trash from '../../base/images/svg_black/trash.svg';
import {categoryTypes} from '../../helpers/constants';

export const TransactionTable = ({type}) => {
	const dispatch = useDispatch();

	const transactions = useSelector(transactionsSelectors.getAllTransactions)
		.filter(transaction => transaction.category.type === type);

	const onDeleteTransaction = useCallback(
		id => {
			dispatch(transactionsOperations.deleteTransaction(id));
		},
		[dispatch],
	);

	return (
		<table className="income">
			<thead className="income__head">
			<tr>
				<th>Дата</th>
				<th>Описание</th>
				<th>Категория</th>
				<th>Сумма</th>
				<th/>
			</tr>
			</thead>

			<tbody>
			{transactions.map(
				({_id, datetime, description, category, amount}) => (
					<tr key={_id}>
						<td>{datetime}</td>
						<td>{description}</td>
						<td>{category.name}</td>
						<td>{type === categoryTypes.EXPENSE && '-'}{amount}</td>
						<td align="center" className={s.categoriesActions}>
							<button onClick={() => onDeleteTransaction(_id)}
							        className={s.categoriesActionsDelete}
							>
								<img src={trash} alt="Delete" className={s.categoriesActionsDeleteIcon}/>
							</button>
						</td>
					</tr>
				)
			)}
			</tbody>
		</table>
	);
};

TransactionTable.propTypes = {
	type: PropTypes.oneOf([categoryTypes.EXPENSE, categoryTypes.INCOME])
}

