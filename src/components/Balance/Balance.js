import {useState} from 'react';
import classNames from 'classnames';
import {  useSelector } from "react-redux";

import { walletsSelectors } from "../../redux/wallets";
// import Popover from "../Popover/Popover";
import s from './Balance.module.scss';

const Balance = () => {
  const totalBalance = useSelector(walletsSelectors.getSumWallets);
  const wallets = useSelector(walletsSelectors.getAllWallets);
  const [active, setActive] = useState(false);

  return (
    <div className={s.balanceWrapper}
         onClick={() => setActive(!active)}
         onMouseEnter={() => setActive(true)}
         onMouseLeave={() => setActive(false)}
    >
      <span>Баланс: {totalBalance} UAH</span>
      {/* {!currentBalance && <Popover />} */}
      <ul className={classNames(s.walletsList, {[s.active]: active})}>
        {wallets.map(wallet => (
          <li key={wallet._id} className={s.walletItem}>
            <span>{wallet.name}</span>
            <span>{wallet.balance}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Balance;
