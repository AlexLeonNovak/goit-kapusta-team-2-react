import PropTypes from "prop-types";

const ExpenseItem = ({ datetime, description, category, amount }) => (
  <tr>
    <td>{datetime}</td>
    <td>{description}</td>
    <td>{category}</td>
    <td>{amount}</td>
    <td>
      <span>X</span>
    </td>
  </tr>
);

ExpenseItem.protoTypes = {
  datetime: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default ExpenseItem;
