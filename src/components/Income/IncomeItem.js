import React, { useCallback } from 'react';
import { transactionsOperations } from '../../redux/transactions';
import { useDispatch } from 'react-redux';
import PropTypes from "prop-types";
import s from '../CategoriesList/CategoriesList.module.scss';
import trash from '../../base/images/svg_black/trash.svg';

const IncomeItem = ({ id, datetime, description, category, amount }) => {
  const dispatch = useDispatch();
  const onDeleteTransaction = useCallback(
    id => {
      dispatch(transactionsOperations.deleteTransaction(id));
    },
    [dispatch],
  );

  return (
      <tr>
    <td>{datetime}</td>
    <td>{description}</td>
    <td>{category}</td>
    <td>{amount}</td>
    <td align="center" className={s.categoriesActions}>
                <button onClick={() => onDeleteTransaction(id)} className={s.categoriesActionsDelete}>
                  <img src={trash} alt="" className={s.categoriesActionsDeleteIcon} />
                </button>
              </td>
  </tr>
  );
};

IncomeItem.protoTypes = {
  datetime: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default IncomeItem