import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

export const TwoDigits = value => {
  const result = +value >= 10 ? +value : `0${+value}`;
  return result;
};

export const dataByDate = (data, { year, month }) => {
  return data.filter(item => item.date.includes(`${year}-${TwoDigits(month)}`));
};

export const getAmountByMonth = (data, { year, month }) => {
  const date = moment(new Date());
  const amount = dataByDate(data, { year, month })
    .map(item => item.amount)
    .reduce((acc, value) => acc + value, 0);

  const result = {
    id: uuidv4(),
    month: date.month(month - 1).format('MMMM'),
    monthNumder: month,
    year: year,
    amount,
  };

  return result;
};

export const getAmountByPeriod = ({ data, viewOld }) => {
  let year = +moment(new Date()).format('YYYY');
  let month = +moment(new Date()).format('M');

  const result = [];
  for (let i = 1; i <= viewOld; i += 1) {
    if (month === 1) {
      year -= 1;
      month = 12;
    }
    if (month === 12) {
      year += 1;
      month = 1;
    }
    result.push(getAmountByMonth(data, { year, month }));
    month -= 1;
  }

  return result;
};