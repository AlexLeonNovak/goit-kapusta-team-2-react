import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { transactionsSelectors } from "../../redux/transactions";
// import {
//   transactionsOperations,
//   //   transactionsSelectors,
// } from "../../redux/transactions";

import ExpenseItem from "./ExpenseItem";

import "./expense.css";

const ExpenseList = () => {
  const dispatch = useDispatch();
  const transactions = useSelector(transactionsSelectors.getAllTransactions);

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
        {transactions.map(
          ({ _id, datetime, description, category, amount }) => (
            <ExpenseItem
              key={_id}
              datetime={datetime}
              description={description}
              category={category.name}
              amount={amount}
            />
          )
        )}
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
