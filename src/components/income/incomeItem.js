import PropTypes from "prop-types";

const IncomeItem = ({ id, date, desc, catt, summ }) => (
  <tr key={id}>
    <td>{date}</td>
    <td>{desc}</td>
    <td>{catt}</td>
    <td>{summ}</td>
    <td>
      <span>X</span>
    </td>
  </tr>
);

IncomeItem.protoTypes = {
  date: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  catt: PropTypes.string.isRequired,
  summ: PropTypes.number.isRequired,
  del: PropTypes.func.isRequired,
};

export default IncomeItem;
