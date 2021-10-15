import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  fetchReportsRequest,
  fetchReportsSuccess,
  fetchReportsError,
  addReportRequest,
  addReportSuccess,
  addReportError,
} from "./reports.actions";

const items = createReducer([], {
  [fetchReportsSuccess]: (_, { payload }) => payload.reports,

  [addReportSuccess]: (state, { payload }) =>
    state.map((report) => report.name).includes(payload.name)
      ? alert(`${payload.name} is already in reports.`)
      : [payload, ...state],
});

const loading = createReducer(false, {
  [fetchReportsRequest]: () => true,
  [fetchReportsSuccess]: () => false,
  [fetchReportsError]: () => false,

  [addReportRequest]: () => true,
  [addReportSuccess]: () => false,
  [addReportError]: () => false,
});

const error = createReducer(null, {});

export default combineReducers({
  items,
  loading,
  error,
});
