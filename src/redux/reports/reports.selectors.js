import { createSelector } from "@reduxjs/toolkit";

const getAllReports = (state) => state.reports.items;

const getIncomeReports = createSelector([getAllReports], (reports) =>
  reports.filter((report) => {
    if (report.type === "income") {
      return report.name;
    }
  })
);

const getExpenseReports = createSelector([getAllReports], (reports) =>
  reports.filter((report) => {
    if (report.type === "expense") {
      return report.name;
    }
  })
);

// const getVisibleReports = createSelector(
//   [getAllReports],
//   (Reports, filter) => {
//     const normalizedFilter = filter.toLowerCase();

//     return Reports.filter((report) =>
//       report.toLowerCase().includes(normalizedFilter),
//     );
//   }
// );

export default {
  getAllReports,
  getIncomeReports,
  getExpenseReports,
};
