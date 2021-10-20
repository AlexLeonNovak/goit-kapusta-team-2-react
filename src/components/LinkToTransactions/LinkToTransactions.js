import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
// import './LinkToTransactions.scss';
import spriteIcon from "../../base/images/sprite.svg";

export default function LinkToTransactions() {
  return (
    <div>
      <NavLink to={routes.transactions}>
        <svg aria-label="Ссылка на страницу отчетов">
          <use href={spriteIcon + "#keyboard_backspace"} />
        </svg>
        <span>Вернуться на главную</span>
      </NavLink>
    </div>
  );
}
