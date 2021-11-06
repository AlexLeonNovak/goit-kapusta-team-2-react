import { walletsSelectors } from '../../redux/wallets'
import {useSelector} from 'react-redux';
import {Loader} from '../../components/Loader';
import React from "react";
import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

import {BillsForm} from '../../components/BillsForm';
import {BillsList} from '../../components/BillsList';
import {LinkToReport} from "../../components/LinkToReport";
import Balance from "../../components/Balance";
// import s from '../Categories/Categories.module.scss'

const Bills = () => {
  const isLoading = useSelector(walletsSelectors.getLoading);

  return (
    <div>
      {isLoading && <Loader />}
      <div>
        <LinkToReport />
        <Balance />
      </div>
      <div>
        <h2>Счета</h2>
      </div>
      <div>
        <BillsForm />
        <BillsList />
        <ToastContainer />
      </div>
    </div>
  );
};

export default Bills;
