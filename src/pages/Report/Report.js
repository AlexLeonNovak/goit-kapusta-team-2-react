import {Swiper} from '../../components/Swiper';
import {Accounting} from "../../components/Accounting";
import Chartjs from "../../components/Chartjs/Chartjs";

import s from "./Report.module.scss";
import {TotalTransactionsSum} from '../../components/TotalTransactionsSum';
import {categoryTypes} from '../../helpers/constants';
import {useState} from 'react';

function Report() {

  const types = [
    {
      label: "РАСХОД",
      value: categoryTypes.EXPENSE
    },
    {
      label: "ДОХОД",
      value: categoryTypes.INCOME
    }
  ];

  const [currentType, setCurrentType] = useState(categoryTypes.EXPENSE);
  const [currentCategory, setCurrentCategory] = useState(null);
  console.log(currentCategory)
  return (
    <>
      <div className={s.categories}>
        <div className={s.dataline}>
          <TotalTransactionsSum />
        </div>
        <div className={s.expencesBlock}>
          <Swiper items={types} onSlideChange={item => setCurrentType(item.value)} />
          <Accounting type={currentType} onChangeCategory={id => setCurrentCategory(id)} />
        </div>
        <div className={s.expencesBlock}>
          <div className={s.chartBlock}>
            <Chartjs category={currentCategory} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Report;
