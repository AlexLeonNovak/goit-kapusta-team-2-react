import React from "react";
import PropTypes from "prop-types";

import IncomeItem from "./IncomeItem";

import "./income.css";

const IncomeList = ({ items }) => (
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
      {items.map(({ id, date, desc, catt, summ }) => (
        <IncomeItem key={id} date={date} desc={desc} catt={catt} summ={summ} />
      ))}
    </tbody>
  </table>
);

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
