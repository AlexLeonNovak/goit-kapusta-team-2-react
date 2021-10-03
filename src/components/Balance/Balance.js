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
        <p className={styles.balanceTitle}>Баланс:</p>
        <p className={styles.balanceCount}>{balance} UAN</p>
        <button className={styles.balanceBtn} onClick={updateBalance}>
          ПОДТВЕРДИТЬ
        </button>
      </div>
    </div>
  );
}

export default Balance;
