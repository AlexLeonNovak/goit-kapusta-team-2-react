import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import {
  transactionsOperations,
  transactionsSelectors,
} from "../../redux/transactions";

import IncomeItem from "./IncomeItem";

import "./income.css";

const IncomeList = () => {
  const dispatch = useDispatch();
  const transactions = useSelector(
    transactionsSelectors.getVisibleTransactions
  );

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
              date={datetime}
              desc={description}
              catt={category}
              summ={amount}
            />
          )
        )}
      </tbody>
    </table>
  );
};

IncomeList.defaultProps = {
  date: "---",
  desc: "---",
  catt: "---",
  summ: "---",
};

IncomeList.propTypes = {
  date: PropTypes.string,
  desc: PropTypes.string,
  catt: PropTypes.string,
  summ: PropTypes.string,
};

export default IncomeList;
