import PropTypes from "prop-types";

const ExpenseItem = ({ id, date, desc, catt, summ }) => (
  <tr key={id}>
    <td>{date}</td>
    <td>{desc}</td>
    <td>{catt}</td>
    <td>-{summ}</td>
    <td>
      {/* TODO change "X" for deleteButton.svg, when it will be */}
      <span>X</span>
    </td>
  </tr>
);

ExpenseItem.protoTypes = {
  date: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  catt: PropTypes.string.isRequired,
  summ: PropTypes.number.isRequired,
  del: PropTypes.func.isRequired,
};

export default ExpenseItem;
