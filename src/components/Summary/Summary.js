import { useSelector} from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types';
import styles from './Summary.module.scss';
import {transactionsSelectors} from '../../redux/transactions';
import {categoryTypes} from '../../helpers/constants';

import 'moment/locale/ru';

export const Summary = ({type}) => {
	const summary = useSelector(transactionsSelectors.getSummary);
	return (
		<div className={styles.container}>
			<h4 className={styles.title}>Сводка</h4>
			<ul className={styles.list}>
				{summary.map(item => (
						<li key={`${item.year}${item.month}`} className={styles.item}>
							<span>{moment().month(item.month - 1).format('MMMM')}</span>
							<span>{item[type]}</span>
						</li>
					)
				)}
			</ul>
		</div>
	);
};

Summary.propTypes = {
	type: PropTypes.oneOf([categoryTypes.EXPENSE, categoryTypes.INCOME])
}
