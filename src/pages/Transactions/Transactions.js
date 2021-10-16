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
      label: "РАСХОД",
      value: categoryTypes.EXPENSE
    },
    {
      label: "ДОХОД",
      value: categoryTypes.INCOME
    }
  ];

  const [currentType, setCurrentType] = useState(categoryTypes.EXPENSE);

  return (
    <div className={classNames(s.container, s.transWrapper )}>
      <Tabs items={tabItems} onChange={(item) => setCurrentType(item.value)} />
      <TransactionForm type={currentType}/>
      <TransactionTable type={currentType}/>
      <Summary type={currentType}/>
    </div>
  );
};

export default Transactions;
