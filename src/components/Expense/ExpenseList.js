import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
// import {
// transactionsOperations,
// transactionsSelectors,
// } from "../../redux/transactions";

import ExpenseItem from "./ExpenseItem";

import "./expense.css";

const ExpenseList = () => {
  const dispatch = useDispatch();
  // const transactions = useSelector(
  //   transactionsSelectors.getVisibleTransactions
  // );
  return (
    <table className="expense">
      <thead className="expense__head">
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
          <ExpenseItem
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

ExpenseList.defaultProps = {
  datetime: "---",
  description: "---",
  category: "---",
  amount: "---",
};

ExpenseList.propTypes = {
  datetime: PropTypes.string,
  description: PropTypes.string,
  category: PropTypes.string,
  amount: PropTypes.string,
};

export default ExpenseList;
