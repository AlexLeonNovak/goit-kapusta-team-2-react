import React from "react";
import PropTypes from "prop-types";

import IconDelete from "../iconDelete/IconDelete";

const ExpenseItem = ({ id, date, desc, catt, summ }) => (
  <tr key={id}>
    <td>{date}</td>
    <td>{desc}</td>
    <td>{catt}</td>
    <td>-{summ}</td>
    <td>
      <button type="button">
        <IconDelete />
      </button>
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
