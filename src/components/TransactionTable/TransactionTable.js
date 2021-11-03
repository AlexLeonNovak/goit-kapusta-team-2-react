import React, { useCallback, useState } from "react";
import moment from "moment";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  transactionsOperations,
  transactionsSelectors,
} from "../../redux/transactions";

// import classNames from "classnames";

import trash from "../../base/images/svg_black/trash.svg";
import { categoryTypes } from "../../helpers/constants";
import Modal from "../Modal";

import { toast } from "react-toastify";

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
  const notify = (id) => {
    if (id) {
      return toast.success("The transaction has been deleted");
    }
  };

  const transactions = useSelector(
    transactionsSelectors.getAllTransactions
  ).filter((transaction) => transaction.category.type === type);


  const onDeleteTransaction = useCallback(
    (id) => {
      dispatch(transactionsOperations.deleteTransaction(id));
      notify(id);
    },
    [dispatch]
  );

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Дата</th>
            <th>Описание</th>
            <th>Категория</th>
            <th>Счет</th>
            <th>Сумма</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(
            ({ _id, datetime, description, category, amount, wallet }) => (
              <tr key={_id}>
                <td>
                  {/* <span>{description}</span> */}
                  {moment(datetime).format("DD.MM.YYYY")}
                </td>
                <td>{description}</td>
                <td>{category.name}</td>
                <td>{wallet.name}</td>
                <td>
                  {type === categoryTypes.EXPENSE && "- "}
                  {amount} грн.
                </td>
                <td align="center">
                  <button onClick={() => onOpenModal(_id)}>
                    <img src={trash} alt="Delete" />
                  </button>
                </td>
              </tr>
            )
          )}
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
