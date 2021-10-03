import React from "react";
import PropTypes from "prop-types";

import ExpenseItem from "./expenseItem";

import "./expense.css";

const ExpenseList = ({ items }) => (
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
      {items.map(({ id, date, desc, catt, summ, del }) => (
        <ExpenseItem
          key={id}
          date={date}
          desc={desc}
          catt={catt}
          summ={summ}
          del={del}
        />
      ))}
    </tbody>
  </table>
);

ExpenseList.defaultProps = {
  amount: "---",
};

ExpenseList.propTypes = {
  date: PropTypes.string,
  desc: PropTypes.string,
  catt: PropTypes.string,
  summ: PropTypes.number,
  del: PropTypes.func,
};

export default ExpenseList;
