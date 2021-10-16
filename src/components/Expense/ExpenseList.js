import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { transactionsSelectors } from "../../redux/transactions";
import ExpenseItem from "./ExpenseItem";

import "./expense.css";

const ExpenseList = () => {
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

      <tbody>
        {transactions.map(
          ({ _id, datetime, description, category, amount }) => {
             if(category.type === "expense") {
              return <ExpenseItem
              key={_id}
              id={_id}
              datetime={datetime.slice(0,10)}
              description={description}
              category={category.name}
              amount={amount}
              />
            }
          }
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
