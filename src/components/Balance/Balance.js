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
    <div>
      <span>Баланс:</span>
      <form onSubmit={onSubmit}>
        <div>
          <div>
            <input
              type="money"
              name="balance"
              // pattern="\d+(\.\d{2})?"
              step="any"
              onChange={(e) => setBalance(e.target.value)}
              value={balance}
            />
          </div>
          {!currentBalance && <Popover />}
          <span>UAH</span>
        </div>
        {!isHiddenButton && (
          <div>
            <button id="Popover1" type="submit" aria-describedby="tooltip">
              Подтвердить
            </button>
          </div>
        )}
      </form>
    </div>
  );
};
export default Balance;
