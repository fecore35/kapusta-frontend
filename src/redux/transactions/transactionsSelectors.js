import { createSelector } from 'reselect';
import { transactionsHelper } from 'helpers/transactionsHelper';

const getIncomeTransactions = state => state.transactions.income;

const getSpendingTransactions = state => state.transactions.spending;

const getTransactionsError = state => state.transactions.error;

const getTransactionsLoading = state => state.transactions.isLoading;

const getVisibleIncomeTransactions = createSelector(
  [getIncomeTransactions],
  transactions => {
    if (!transactions) {
      return;
    }

    return transactionsHelper(transactions);
  },
);

const getVisibleSpendingTransactions = createSelector(
  [getSpendingTransactions],
  transactions => {
    if (!transactions) {
      return;
    }

    return transactionsHelper(transactions);
  },
);

const transactionsSelectors = {
  getIncomeTransactions,
  getSpendingTransactions,
  getTransactionsError,
  getTransactionsLoading,
  getVisibleIncomeTransactions,
  getVisibleSpendingTransactions,
};

export default transactionsSelectors;
