import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import s from './LinkToTransactions.module.scss';
import spriteIcon from '../../base/images/sprite.svg';

export default function LinkToTransactions() {
  return (
    <NavLink to={routes.transactions}>
      <div className={s.LinkToTransactions}>
        <svg
          className={s.LinkToTransactionsIcon}
          aria-label='Ссылка на страницу отчетов'
        >
          <use href={spriteIcon + '#keyboard_backspace'} />
        </svg>
        <span className={s.LinkToTransactionsText}>Вернуться на главную</span>
      </div>
    </NavLink>

  );
}
