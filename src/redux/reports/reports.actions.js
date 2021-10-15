import { createAction } from "@reduxjs/toolkit";

export const fetchReportsRequest = createAction("reports/fetchReportsRequest");
export const fetchReportsSuccess = createAction("reports/fetchReportsSuccess");
export const fetchReportsError = createAction("reports/fetchReportsError");

export const addReportRequest = createAction("reports/addReportRequest");
export const addReportSuccess = createAction("reports/addReportSuccess");
export const addReportError = createAction("reports/addReportError");

export const filterReports = createAction("reports/Filter");
