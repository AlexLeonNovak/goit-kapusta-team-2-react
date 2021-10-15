import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { transactionsSelectors } from "../../redux/transactions";
import IncomeItem from "./IncomeItem";

import "./income.css";

const IncomeList = () => {
  const transactions = useSelector(transactionsSelectors.getAllTransactions);
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

      <tbody>
        {transactions.map(
          ({ _id, datetime, description, category, amount }) => {
            
            if (category.type === "income") {
              return <IncomeItem
              key={_id}
              id={_id}
              datetime={datetime.slice(0, 10)}
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
