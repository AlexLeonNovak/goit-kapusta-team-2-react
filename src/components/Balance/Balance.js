import React, { useState } from "react";
import styles from "./Balance.module.scss";

function Balance() {
  const [balance, setBalance] = useState(0);

  function updateBalance() {
    setBalance(balance + 1, console.log(balance));
  }
  return (
    <div className={styles.container}>
      <div className={styles.balance}>
        <p className={styles.balance_title}>Баланс:</p>
        <p className={styles.balance_count}>{balance.toFixed(2)} UAN</p>
        <button className={styles.balance_btn} onClick={updateBalance}>
          ПОДТВЕРДИТЬ
        </button>
      </div>
    </div>
  );
}

export default Balance;
