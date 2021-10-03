import PropTypes from "prop-types";

import IncomeItem from "./incomeItem";

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

    <tbody>
      {items.map(({ id, date, desc, catt, summ, del }) => (
        <IncomeItem
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

IncomeList.defaultProps = {
  amount: "---",
};

IncomeList.propTypes = {
  date: PropTypes.string,
  desc: PropTypes.string,
  catt: PropTypes.string,
  summ: PropTypes.number,
  del: PropTypes.func,
};

export default IncomeList;
