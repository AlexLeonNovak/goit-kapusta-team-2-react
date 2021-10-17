import React, { useCallback, useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { userOperations, userSelectors } from '../../redux/user';
import { ReactComponent as Arrow } from '../../images/left-arrow.svg';
import styles from "./Balance.module.scss";


const Balance = () => {

  const dispatch = useDispatch();
  const [popoverOpen, setPopoverOpen] = useState(false);
  const toggle = () => setPopoverOpen(!popoverOpen);
  const currentBalance = useSelector(userSelectors.getBalance);
  const history = useHistory();

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

   const handleClickBack = () => {
    history.push('/');
  };

  return (
    <div className={styles.container}>
      <form className={styles.balance} onSubmit={onSubmit}>
         <button
          className={styles.arrowBtn}
          type="button"
          onClick={handleClickBack}
        >
          <Arrow className={styles.arrowSvg} />
          <p className={styles.backText}>Вернуться на главную</p>
          {/* <p className={styles.backTextTabl}>На главную</p> */}
        </button>
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
