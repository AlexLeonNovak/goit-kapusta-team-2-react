import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {userOperations, userSelectors} from '../../redux/user';
import styles from "./Balance.module.scss";


const Balance = () => {

  const dispatch = useDispatch();
  const [popoverOpen, setPopoverOpen] = useState(false);
  const toggle = () => setPopoverOpen(!popoverOpen);
  const currentBalance = useSelector(userSelectors.getBalance);

  useEffect(() => {
    setBalance(currentBalance);
  }, [currentBalance]);



  const [balance, setBalance] = useState(0);

  const onSubmit = useCallback((e) => {
      e.preventDefault();
      dispatch(userOperations.updateBalance(balance));
    },
    [dispatch, balance]
  );

  return (
    <div className={styles.container}>
      <form className={styles.balance} onSubmit={onSubmit}>
        <span className={styles.balance_title}>Баланс:</span>

        <div className={styles.balance_input}>
          <input
            className={styles.balance_input_zone}
            type="money"
            name="balance"
            // pattern="\d+(\.\d{2})?"
            step="any"
            onChange={e => setBalance(e.target.value)}
            value={balance}
          />
          <span className={styles.balance_input_text}>UAH</span>
        </div>
        <div>
          <button
            id="Popover1"
            className={styles.balance_btn}
            type="submit"
            aria-describedby="tooltip"
          >
            ПОДТВЕРДИТЬ
          </button>
          {/* <Popover
            placement="bottom"
            isOpen={popoverOpen}
            target="Popover1"
            toggle={toggle}
          >
            <PopoverHeader>
              Привет! Для начала работы внеси текущий баланс своего счета!
            </PopoverHeader>
            <PopoverBody>
              Ты не можешь тратить деньги пока их у тебя нет
            </PopoverBody>
          </Popover> */}
        </div>
      </form>
    </div>
  );

}
export default Balance;
