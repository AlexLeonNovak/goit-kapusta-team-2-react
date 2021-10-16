import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Summary.module.scss';
import { transactionsSelectors, transactionsOperations } from '../../redux/transactions';
import { categoryTypes } from '../../helpers/constants';

export const Summary = ({type}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(transactionsOperations.fetchSummary())
  }, [dispatch]);


  const summary = useSelector(transactionsSelectors.getSummary);

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Сводка</h4>
      <ul className={styles.list}>
        {summary.map(item => (
          <li key={`${item.year}${item.month}`} className={styles.item}>
            <span>{item.month}</span>
            <span>{item[type]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

Summary.propTypes = {
  type: PropTypes.oneOf([categoryTypes.EXPENSE, categoryTypes.INCOME])
}
