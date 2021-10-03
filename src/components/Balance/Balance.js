import React, { useState } from "react";
import styles from "./Balance.module.css";

function Balance() {
  const [balance, setBalance] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.balance}>
        <p className={styles.balanceTitle}>Баланс:</p>
        <p className={styles.balanceCount}>{balance} UAN</p>
        <button className={styles.balanceBtn}>ПОДТВЕРДИТЬ</button>
      </div>
    </div>
  );
}

export default Balance;
