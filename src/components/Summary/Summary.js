import {useDispatch, useSelector} from 'react-redux';
import moment from "moment";
import PropTypes from "prop-types";
import s from './Summary.module.scss';
import { transactionsSelectors, transactionsOperations } from "../../redux/transactions";
import { categoryTypes } from "../../helpers/constants";

import "moment/locale/ru";
import classNames from 'classnames';

export const Summary = ({ type }) => {
  const dispatch = useDispatch();
  const summary = useSelector(transactionsSelectors.getSummary);
  const year = useSelector(transactionsSelectors.getYear);
  const month = useSelector(transactionsSelectors.getMonth);

  const handleSummaryClick = (item) => {
    dispatch(transactionsOperations.fetchTransactions(item))
  }

  return (
    <table className={`table table-grey ${s.summaryTable}`}>
      <thead>
        <tr>
          <th colSpan="2" className={s.alignCenter}>Сводка</th>
        </tr>
      </thead>

      <tbody>
        {summary.map((item) => (
          <tr key={`${item.year}${item.month}`}
              className={classNames(
                [s.summaryItem,
                  {[s.active]: item.year === year && item.month === month}]
              )}
              onClick={() => handleSummaryClick(item)}
          >
            <td>
              {moment()
                .month(item.month - 1)
                .format("MMMM")}
            </td>
            <td>{item[type]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Summary.propTypes = {
  type: PropTypes.oneOf([categoryTypes.EXPENSE, categoryTypes.INCOME]),
};
