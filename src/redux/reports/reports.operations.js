import axios from "axios";
import {
  addReportRequest,
  addReportSuccess,
  addReportError,
  fetchReportsRequest,
  fetchReportsSuccess,
  fetchReportsError,
} from "./reports.actions";

const fetchReports = () => async (dispatch) => {
  dispatch(fetchReportsRequest());

  try {
    const { data } = await axios.get("/categories");
    dispatch(fetchReportsSuccess(data.data.reports));
  } catch (error) {
    dispatch(fetchReportsError(error.message));
  }
};

const addReport =
  ({ name, type }) =>
  async (dispatch) => {
    const report = { name, type };

    dispatch(addReportRequest());

    try {
      const { data } = await axios.post("/reports", report);
      dispatch(addReportSuccess(data));
    } catch (error) {
      dispatch(addReportError(error.message));
    }
  };

// const deleteReport = (reportId) => async (dispatch) => {
//   dispatch(deleteReportRequest());

//   try {
//     await axios.delete(`/reports/${reportId}`);
//     dispatch(deleteReportSuccess(reportId));
//   } catch (error) {
//     dispatch(deleteReportError(error.message));
//   }
// };

export default { addReport, fetchReports };
