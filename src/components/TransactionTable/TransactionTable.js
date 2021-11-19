import React, { useCallback, useState } from "react";
import moment from "moment";
import classNames from "classnames";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import Modal from "../Modal";

import {
  transactionsOperations,
  transactionsSelectors,
} from "../../redux/transactions";
import trash from "../../base/images/svg_black/trash.svg";
import { categoryTypes } from "../../helpers/constants";

import s from './TransactionTable.module.scss'

const MIN_ROW_COUNT = 9;

export const TransactionTable = ({ type }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState("");

  const toggleModal = () => {
    setShowModal(!showModal);
    setId("");
  };
  const onOpenModal = (id) => {
    setShowModal(true);
    setId(id);
  };

  const transactions = useSelector(
    transactionsSelectors.getAllTransactions
  ).filter((transaction) => transaction.category.type === type);


  const onDeleteTransaction = useCallback(
    (id) => {
      dispatch(transactionsOperations.deleteTransaction(id));
    },
    [dispatch]
  );

  return (
    <>
      <table className={`table ${s.table}`}>
        <thead className={s.tableHead}>
          <tr>
            <th>Дата</th>
            <th>Описание</th>
            <th>Категория</th>
            <th>Счет</th>
            <th>Сумма</th>
            <th />
          </tr>
        </thead>

        <tbody>
          {transactions.map(
            ({ _id, datetime, description, category, amount, wallet }) => (
              <tr key={_id}>
                <td className={s.column}>
                  <span className={s.mobileDescription}>{description}</span>
                  <span className={s.date}>{moment(datetime).format("DD.MM.YYYY")}</span>
                </td>
                <td className={s.hideMobile}>{description}</td>
                <td>{category.name}</td>
                <td className={s.hideMobile}>{wallet.name}</td>
                <td className={s.column}>
                  <span className={classNames(s.amount, s[type])}>
                  {type === categoryTypes.EXPENSE && "- "}
                  {amount} грн.
                  </span>
                  <span className={s.mobileWallet}>{wallet.name}</span>
                </td>
                <td align="center">
                  <button onClick={() => onOpenModal(_id)} className="btn btn-rounded">
                    <img src={trash} alt="Delete" className="btn-icon" />
                  </button>
                </td>
              </tr>
            )
          )}
          {transactions.length <= MIN_ROW_COUNT &&
          [...Array(MIN_ROW_COUNT - transactions.length)]
            .map((_, i) => (<tr key={i}><td colSpan={6}  className={s.hideMobile}>&nbsp;</td></tr>))
          }
        </tbody>
      </table>
      {showModal && (
        <Modal
          ChildComponent
          title={"Вы уверены?"}
          onClose={toggleModal}
          onClick={() => onDeleteTransaction(id)}
        />
      )}
    </>
  );
};

TransactionTable.propTypes = {
  type: PropTypes.oneOf([categoryTypes.EXPENSE, categoryTypes.INCOME]),
};
