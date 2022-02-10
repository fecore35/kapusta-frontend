const getReportCategory = state => state.report.category;

const getReportError = state => state.report.error;

const reportSelectors = { getReportCategory, getReportError };

export default reportSelectors;
