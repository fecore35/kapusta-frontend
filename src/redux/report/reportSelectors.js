import { createSelector } from 'reselect';

const getReportCategory = state => state.report.category;

const getReportError = state => state.report.error;

const getReportType = state => state.report.income;

const getMonth = state => state.report.month;

const getYear = state => state.report.year;

const getIncome = state => state.report.incomeSum;

const getCosts = state => state.report.spendingSum;

const getVisibleCategory = createSelector(
  [getReportCategory, getReportType],
  (category, isIncome) => {
    if (isIncome) {
      return (
        category &&
        category.filter(
          ({ slug }) => slug.includes('salary') || slug.includes('addition'),
        )
      );
    }

    return (
      category &&
      category.filter(({ slug }) => slug !== 'salary' && slug !== 'addition')
    );
  },
);

const reportSelectors = {
  getReportCategory,
  getReportError,
  getVisibleCategory,
  getReportType,
  getMonth,
  getYear,
  getIncome,
  getCosts,
};

export default reportSelectors;
