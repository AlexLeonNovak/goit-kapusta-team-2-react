import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import './LinkToTransactions.scss';
import spriteIcon from '../../base/images/sprite.svg';

export default function LinkToTransactions() {
  return (
    <NavLink to={routes.transactions}>
      <div className='LinkToTransactions'>
        <svg
          className='LinkToTransactionsIcon'
          aria-label='Ссылка на страницу отчетов'
        >
          <use href={spriteIcon + '#keyboard_backspace'} />
        </svg>
        <span className='LinkToTransactionsText'>Вернуться на главную</span>
      </div>
    </NavLink>
  );
}
