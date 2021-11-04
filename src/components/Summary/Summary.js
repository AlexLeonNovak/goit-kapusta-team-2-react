import { useSelector } from "react-redux";
import moment from "moment";
import PropTypes from "prop-types";
// import styles from './Summary.module.scss';
import { transactionsSelectors } from "../../redux/transactions";
import { categoryTypes } from "../../helpers/constants";

import "moment/locale/ru";

export const Summary = ({ type }) => {
  const summary = useSelector(transactionsSelectors.getSummary);
  return (
    <table className="table table-grey">
      <thead>
        <tr>
          <th colSpan="2">Сводка</th>
        </tr>
      </thead>

      <tbody>
        {summary.map((item) => (
          <tr key={`${item.year}${item.month}`}>
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
