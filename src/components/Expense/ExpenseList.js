import PropTypes from "prop-types";

import ExpenseItem from "./ExpenseItem";

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

    {/* TODO need to fix error with unique id */}

    <tbody>
      {items.map(({ id, date, desc, catt, summ, del }) => (
        <ExpenseItem key={id} date={date} desc={desc} catt={catt} summ={summ} />
      ))}
    </tbody>
  </table>
);

ExpenseList.defaultProps = {
  date: "---",
  desc: "---",
  catt: "---",
  summ: "---",
};

ExpenseList.propTypes = {
  date: PropTypes.string,
  desc: PropTypes.string,
  catt: PropTypes.string,
  summ: PropTypes.string,
};

export default ExpenseList;
