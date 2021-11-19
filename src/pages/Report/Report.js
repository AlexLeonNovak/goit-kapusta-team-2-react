import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { Swiper } from '../../components/Swiper';
import { Accounting } from '../../components/Accounting';
import Chartjs from '../../components/Chartjs/Chartjs';
import { TotalTransactionsSum } from '../../components/TotalTransactionsSum';

import s from './Report.module.scss';
import { categoryTypes } from '../../helpers/constants';
import {
  transactionsSelectors,
  transactionsOperations,
} from '../../redux/transactions';

import 'moment/locale/ru';
import LinkToTransactions from '../../components/LinkToTransactions/LinkToTransactions';

function Report() {
  const dispatch = useDispatch();
  const types = [
    {
      label: 'РАСХОДЫ',
      value: categoryTypes.EXPENSE,
    },
    {
      label: 'ДОХОДЫ',
      value: categoryTypes.INCOME,
    },
  ];

  const summary = useSelector(transactionsSelectors.getSummary).map((item) => ({
    ...item,
    label: moment(new Date(item.year, item.month - 1)).format('MMMM YYYY'),
    value: `${item.year}${item.month}`,
  }));
  const currentYear = useSelector(transactionsSelectors.getYear);
  const currentMonth = useSelector(transactionsSelectors.getMonth);
  const summaryIdx = summary.findIndex(
    (item) => item.year === currentYear && item.month === currentMonth
  );

  const [currentType, setCurrentType] = useState(categoryTypes.EXPENSE);
  const [currentCategory, setCurrentCategory] = useState(null);

  const handleChangeMonth = ({ month, year }) => {
    if (currentMonth !== month || currentYear !== year) {
      dispatch(transactionsOperations.fetchTransactions({ month, year }));
    }
  };

  return (
    <div>
      <div className={s.topSection}>
        <div className={s.wrapperLink}>
          <LinkToTransactions />
        </div>
        <div>
          {summary && (
            <div className={s.currentPeriodWrapper}>
              <span className={s.swiperText}>Текущий период:</span>
              <Swiper
                items={summary}
                onSlideChange={(item) => handleChangeMonth(item)}
                activeIndex={summaryIdx}
              />
            </div>
          )}
        </div>
      </div>
      <div>
        <div className={s.sectionTotalTransactionsSum}>
          <TotalTransactionsSum />
        </div>
        <div className={`${s.section} ${s.accountingSection}`}>
          <Swiper
            items={types}
            onSlideChange={(item) => setCurrentType(item.value)}
          />
          <Accounting
            type={currentType}
            onChangeCategory={(id) => setCurrentCategory(id)}
          />
        </div>
        <div className={`${s.section} ${s.chartSection}`}>
          <Chartjs category={currentCategory} />
        </div>
      </div>
    </div>
  );
}

export default Report;
