import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userOperations, userSelectors } from "../../redux/user";
import Popover from "../Popover/Popover";
import s from "./Balance.module.scss";

const Balance = ({ isHiddenBtn }) => {
  let hiddenBtn = false;
  isHiddenBtn ? (hiddenBtn = true) : (hiddenBtn = false);
  const dispatch = useDispatch();
  const currentBalance = useSelector(userSelectors.getBalance);
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

  // const notify = () => {
  //   if (!balance || balance === "0") {
  //     return toast.warning("Balance not entered");
  //   }
  //   toast.success("Balance entered");
  // };

  return (
    <div>
      <div className={s.container_balance}>
        <span className={s.balance_title}>Баланс:</span>
        <form className={s.balance} onSubmit={onSubmit}>
          <div className={s.balance_input}>
            <input
              className={s.balance_input_zone}
              type="money"
              name="balance"
              placeholder="00.00"
              pattern="\d+(.\d{2})?"
              step="any"
              onChange={(e) => setBalance(e.target.value)}
              value={balance}
            />
            {!currentBalance && <Popover />}
            <span className={s.balance_input_text}>UAH</span>
          </div>
          {!hiddenBtn && (
            <button
              id="Popover1"
              className={s.balance_btn}
              type="submit"
              aria-describedby="tooltip"
            >
              ПОДТВЕРДИТЬ
            </button>
          )}
        </form>
      </div>
    </div>
  );
};
export default Balance;
