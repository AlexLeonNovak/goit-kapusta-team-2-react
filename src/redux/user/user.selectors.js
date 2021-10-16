//import { createSelector } from 'reselect';
import { createSelector } from '@reduxjs/toolkit';
import {getAmountByPeriod} from '../../services/helpers';


export const getCosts = state => {
  return state.transactions.costs;
};

export const getIncomes = state => {
  return state.transactions.income;
};

export const getCostsStatistic = createSelector([getCosts], costs =>
  getAmountByPeriod({ data: costs, viewOld: 12 }),
);

export const getIncomesStatistic = createSelector([getIncomes], data =>
  getAmountByPeriod({
    data,
    viewOld: 12,
  }),
);