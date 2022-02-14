const getIncomeTransactions = state => state.transactions.income;

const getSpendingTransactions = state => state.transactions.spending;

const getTransactionsError = state => state.transactions.error;

const getTransactionsLoading = state => state.transactions.isLoading;

const transactionsSelectors = {
  getIncomeTransactions,
  getSpendingTransactions,
  getTransactionsError,
  getTransactionsLoading,
};

export default transactionsSelectors;
