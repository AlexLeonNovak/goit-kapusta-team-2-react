import data from "../../bd/expences.json";

import styles from "./Accounting.module.scss";

const Accounting = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.container_ul}>
        {data.map((result) => (
          <li className={styles.container_item}>
            <span className={styles.container_item_txt}>{result.price}</span>

            <span className={styles.container_item_txt}>{result.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Accounting;
