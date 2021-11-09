import React, { useCallback, useState } from "react";
import moment from "moment";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  transactionsOperations,
  transactionsSelectors,
} from "../../redux/transactions";
import { walletsOperations } from "../../redux/wallets";

import classNames from "classnames";

import trash from "../../base/images/svg_black/trash.svg";
import { categoryTypes } from "../../helpers/constants";
import Modal from "../Modal";

import { toast } from "react-toastify";
import s from "./TransactionTable.module.scss";

const MIN_ROW_COUNT = 9;

export const TransactionTable = ({ type }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState("");
  const [walletId, setWalletId] = useState("");
  const [walletBalance, setWalletBalance] = useState(null);

  const [transactionAmount, setTransactionAmount] = useState(null);

  const toggleModal = () => {
    setShowModal(!showModal);
    setId("");
    updateBalans(
      walletId,
      balanceDeletionOfTransactions(walletBalance, transactionAmount)
    );
    setWalletId("");
    setWalletBalance(null);
    setTransactionAmount(null);
  };
  const onOpenModal = (id, wallet, balance, amount) => {
    setShowModal(true);
    setId(id);
    setWalletId(wallet);
    setWalletBalance(balance);
    setTransactionAmount(amount);
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
      console.log(walletId, walletBalance, transactionAmount);
    },
    [dispatch]
  );

  const balanceDeletionOfTransactions = (walletBalance, transactionAmount) => {
    let balance = 0;

    if (type === "expense") {
      balance = Number(walletBalance) + Number(transactionAmount);
    } else {
      balance = Number(walletBalance) - Number(transactionAmount);
    }
    return balance;
  };

  const updateBalans = useCallback(
    (id, balance) => {
      dispatch(
        walletsOperations.updateWallet(id, {
          balance,
        })
      );
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
                  <span className={s.date}>
                    {moment(datetime).format("DD.MM.YYYY")}
                  </span>
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
                <td align='center'>
                  <button
                    onClick={() =>
                      onOpenModal(_id, wallet._id, wallet.balance, amount)
                    }
                    className='btn btn-rounded'
                  >
                    <img src={trash} alt='Delete' className='btn-icon' />
                  </button>
                </td>
              </tr>
            )
          )}
          {transactions.length <= MIN_ROW_COUNT &&
            [...Array(MIN_ROW_COUNT - transactions.length)].map((_, i) => (
              <tr key={i}>
                <td colSpan={6} className={s.hideMobile}>
                  &nbsp;
                </td>
              </tr>
            ))}
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
