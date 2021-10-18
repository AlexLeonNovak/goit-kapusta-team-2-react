import PropTypes from "prop-types";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./DatePick.module.scss";

const DatePick = ({ value, onChange }) => {
  // const [date, setDate] = useState();
  const a = <input className={styles.customInput} />;

  return (
    <div className={styles.datepicker}>
      <DatePicker
        selected={value}
        onChange={onChange}
        dateFormat="dd.MM.yyyy"
        customInput={a}
      />
    </div>
  );
};

DatePick.propTypes = {
  value: PropTypes.shape().isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DatePick;
