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
    <table className="table">
      <thead>
        <tr>
          <th>Сводка</th>
        </tr>
      </thead>
      <tbody>
        {summary.map((item) => (
          <li key={`${item.year}${item.month}`}>
            <span>
              {moment()
                .month(item.month - 1)
                .format("MMMM")}
            </span>
            <span>{item[type]}</span>
          </li>
        ))}
      </tbody>
    </table>

    // <div>
    //   <h4>Сводка</h4>
    //   <ul>
    //     {summary.map((item) => (
    //       <li key={`${item.year}${item.month}`}>
    //         <span>
    //           {moment()
    //             .month(item.month - 1)
    //             .format("MMMM")}
    //         </span>
    //         <span>{item[type]}</span>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
};

Summary.propTypes = {
  type: PropTypes.oneOf([categoryTypes.EXPENSE, categoryTypes.INCOME]),
};
