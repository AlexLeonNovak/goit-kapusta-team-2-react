import { createSelector } from 'reselect';
import {getAmountByPeriod} from '../../services/helpers';

export const getCosts = store => {
  return store.transactions.costs;
};

export const getIncomes = store => {
  return store.transactions.income;
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