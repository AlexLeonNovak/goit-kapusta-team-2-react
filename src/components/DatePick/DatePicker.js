import React, { useState } from 'react';
import PropTypes from 'prop-types';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './DatePick.module.scss';

const DatePick = () => {
  const [date, setDate] = useState();
  const a = <input className={styles.customInput} />;

  return (
    <DatePicker
      selected={date}
      onChange={newDate => setDate(newDate)}
      dateFormat="dd.MM.yyyy"
      customInput={a}
    />
  );
};

DatePick.propTypes = {
  date: PropTypes.shape().isRequired,
  setDate: PropTypes.func.isRequired,
};

export default DatePick;