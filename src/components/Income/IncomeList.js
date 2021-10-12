import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { getIncomeTransactions } from "../../redux/transactions/transactions.selectors";
import {
  transactionsOperations,
  //   transactionsSelectors,
} from "../../redux/transactions";

import IncomeItem from "./IncomeItem";

import "./income.css";

const IncomeList = () => {
  const dispatch = useDispatch();
  // const transactions = useSelector(transactionsSelectors.getIncomeTransactions);

  // const onDeleteTransaction = useCallback(
  //   (id) => {
  //     dispatch(transactionsOperations.deleteTransaction(id));
  //   },
  //   [dispatch]
  // );

  return (
    <table className="income">
      <thead className="income__head">
        <tr>
          <th>Дата</th>
          <th>Описание</th>
          <th>Категория</th>
          <th>Сумма</th>
          <th></th>
        </tr>
      </thead>

      {/* TODO need to fix error with unique id */}

      <tbody>
        {[].map(({ _id, datetime, description, category, amount }) => (
          <IncomeItem
            key={_id}
            date={datetime}
            desc={description}
            catt={category}
            summ={amount}
          />
        ))}
      </tbody>
    </table>
  );
};

IncomeList.defaultProps = {
  datetime: "---",
  description: "---",
  category: "---",
  amount: "---",
};

IncomeList.propTypes = {
  datetime: PropTypes.string,
  description: PropTypes.string,
  category: PropTypes.string,
  amount: PropTypes.string,
};

export default IncomeList;
