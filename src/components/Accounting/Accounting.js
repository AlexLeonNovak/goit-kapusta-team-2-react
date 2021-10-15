// import { useSelector } from "react-redux";

// import { reportsSelectors } from "../../redux/reports";

import data from "./bd/expences.json";

import styles from "./Accounting.module.scss";

const Accounting = () => {
  // const reports = useSelector(reportsSelectors.getAllReports);
  const reports = data;
  return (
    <div className={styles.container}>
      <ul className={styles.container_ul}>
        {reports.map((result) => (
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
