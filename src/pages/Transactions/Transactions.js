import {useState} from 'react';
import classNames from "classnames";

import { TransactionForm } from "../../components/TransactionForm";
import { TransactionTable } from "../../components/TransactionTable";
import Tabs from "../../components/Tabs/Tabs";

import { categoryTypes } from '../../helpers/constants';
import s from "../Transactions/Transactions.module.scss";
import {Summary} from '../../components/Summary';

const Transactions = () => {
  const tabItems = [
    {
      label: "Расход",
      value: categoryTypes.EXPENSE
    },
    {
      label: "Доход",
      value: categoryTypes.INCOME
    }
  ];

  const [currentType, setCurrentType] = useState(categoryTypes.EXPENSE);

  return (
    <div className={classNames(s.transactions)}>
<div className={classNames(s.container)}>
      <div className={classNames(s.tabs)}>
<Tabs items={tabItems} onChange={(item) => setCurrentType(item.value)} />
      </div>
      <div className={s.formWrapper}>
          <TransactionForm type={currentType} />
          <div className={s.tableWrapper}>
 <TransactionTable type={currentType}/>
    
    <div className={s.summaryWrap}><Summary type={currentType} /></div>
          </div>
   
     </div>
      </div>
    </div>
    
     
  );
};

export default Transactions;
