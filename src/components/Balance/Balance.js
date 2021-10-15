import React, { useState } from "react";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";
// import { Popover, OverlayTrigger } from "bootstrap";
import styles from "./Balance.module.scss";

const Balance = () => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const toggle = () => setPopoverOpen(!popoverOpen);

  const defaultBalance = 55000;
  const [balance, setBalance] = useState(() => {
    return defaultBalance;
  });

  const onSubmit = (event) => {
    console.log(`your balance: ${balance}!`);
    event.preventDefault();
  };

  const onChangeBalance = (event) => {
    // console.log(event.currentTarget.value);
    const { value } = event.currentTarget;
    console.log(
      new Intl.NumberFormat({ minimumSignificantDigits: 4 }).format(value)
    );
    setBalance((prevBalance) => {
      return (prevBalance = value);
    });
  };

  return (
    <div className={styles.container}>
      <form className={styles.balance} onSubmit={onSubmit}>
        <span className={styles.balance_title}>Баланс:</span>

        <div className={styles.balance_input}>
          <input
            className={styles.balance_input_zone}
            type="money"
            name="balance"
            pattern="\d+(\.\d{2})?"
            step="any"
            onChange={onChangeBalance}
            value={balance}
          />
          <span className={styles.balance_input_text}>UAH</span>
        </div>
        <div>
          <Button
            id="Popover1"
            className={styles.balance_btn}
            type="button"
            aria-describedby="tooltip"
          >
            ПОДТВЕРДИТЬ
          </Button>
          <Popover
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
          </Popover>
        </div>
      </form>
    </div>
  );

}
export default Balance;
