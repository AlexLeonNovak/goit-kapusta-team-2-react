import PropTypes from "prop-types";

// const deleteTransaction = (transactionId) => {
//   this.setState((prevState) => ({
//     transactions: prevState.transactions.filter(
//       (transaction) => transaction.id !== transactionId
//     ),
//   }));
// };

const IncomeItem = ({
  datetime,
  description,
  category,
  amount,
  onDeleteTransaction,
}) => (
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
