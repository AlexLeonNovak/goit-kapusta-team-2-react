import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './Summary.module.scss';
import {
  getCostsStatistic,
  getIncomesStatistic,
} from '../../redux/user/user.selectors';

const Summary = () => {
  const dataCost = useSelector(getCostsStatistic);
  const dataIncome = useSelector(getIncomesStatistic);
  const isExpenses = useSelector(store => store.isExpenses);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!dataCost) return;
    if (!dataIncome) return;

    if (isExpenses) {
      setData(dataCost);
      return;
    }
    setData(dataIncome);
  }, [dataCost, dataIncome, isExpenses]);

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Сводка</h4>
      <ul className={styles.list}>
        {data.map(item => (
          <li key={item.id} className={styles.item}>
            <span>{item.month}</span>
            <span>{item.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Summary;