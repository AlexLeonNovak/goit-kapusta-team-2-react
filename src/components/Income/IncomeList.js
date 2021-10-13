import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { transactionsSelectors } from "../../redux/transactions";
import {
  transactionsOperations,
  //   transactionsSelectors,
} from "../../redux/transactions";

import IncomeItem from "./IncomeItem";

import "./income.css";

const IncomeList = () => {
  const dispatch = useDispatch();
  const transactions = useSelector(transactionsSelectors.getAllTransactions);

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
        {transactions.map(
          ({ _id, datetime, description, category, amount }) => (
            <IncomeItem
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
