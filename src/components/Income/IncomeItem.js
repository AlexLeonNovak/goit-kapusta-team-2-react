import PropTypes from "prop-types";

const IncomeItem = ({ datetime, description, category, amount }) => (
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

IncomeItem.protoTypes = {
  datetime: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default IncomeItem;
