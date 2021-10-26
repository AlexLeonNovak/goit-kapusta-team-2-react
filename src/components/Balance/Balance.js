import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userOperations, userSelectors } from "../../redux/user";
import { ReactComponent as Arrow } from "../../images/left-arrow.svg";
import Popover from "../Popover/Popover";
// import styles from "./Balance.module.scss";

import { toast } from "react-toastify";
// import classNames from 'classnames';

const Balance = ({ isHiddenButton = false }) => {
  const dispatch = useDispatch();
  const currentBalance = useSelector(userSelectors.getBalance);
  const history = useHistory();

  useEffect(() => {
    setBalance(currentBalance);
  }, [currentBalance]);

  const [balance, setBalance] = useState(0);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(userOperations.updateBalance(balance));
    },
    [dispatch, balance]
  );

  const handleClickBack = () => {
    history.push("/");
  };

  const notify = () => {
    if (!balance || balance === "0") {
      return toast.warning("Balance not entered");
    }
    toast.success("Balance entered");
  };

  return (
    <div className="balance">
      <form onSubmit={onSubmit}>
        <span>Баланс:</span>
        <input
          type="money"
          name="balance"
          // pattern="\d+(\.\d{2})?"
          step="any"
          onChange={(e) => setBalance(e.target.value)}
          value={balance}
        />
        <span>UAH</span>
      </form>
      {!isHiddenButton && (
        <button
          className="btn btn-accent"
          id="Popover1"
          type="submit"
          aria-describedby="tooltip"
        >
          Подтвердить
        </button>
      )}
      {!currentBalance && <Popover />}
    </div>
  );
};
export default Balance;
