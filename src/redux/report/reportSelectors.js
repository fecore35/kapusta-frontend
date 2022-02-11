import { createSelector } from 'reselect';

const getReportCategory = state => state.report.category;

const getReportError = state => state.report.error;

const getReportType = state => state.report.income;

const getVisibleCategory = createSelector(
  [getReportCategory, getReportType],
  (category, isIncome) => {
    if (!isIncome) {
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
};

export default reportSelectors;