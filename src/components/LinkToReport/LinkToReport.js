import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
import './LinkToReport.scss';
import test from '../../base/images/sprite.svg';

export default function LinkToReport() {
   
  return (
    <div className='linkToReportWrapper'> 
      <NavLink className='linkToReport' to={routes.report}>
        <span className='linkToReportText'>Перейти к отчетам</span>
        <svg class="linkToReportIcon" aria-label="Ссылка на страницу отчетов">
          <use href={test + '#icon-bar_chart'} />
        </svg>
      </NavLink>
    </div>
  );
};