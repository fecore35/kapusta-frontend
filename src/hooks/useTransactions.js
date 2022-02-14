import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  transactionsSelectors,
  transactionsOperation,
} from 'redux/transactions';

export const useTransactions = () => {
  const incomeTransactions = useSelector(
    transactionsSelectors.getVisibleIncomeTransactions,
  );
  const spendingTransactions = useSelector(
    transactionsSelectors.getVisibleSpendingTransactions,
  );
  const transactionsError = useSelector(
    transactionsSelectors.getTransactionsError,
  );
  const isLoading = useSelector(transactionsSelectors.getTransactionsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(transactionsOperation.getTransactions());
  }, [dispatch]);

  return {
    income: incomeTransactions,
    spending: spendingTransactions,
    error: transactionsError,
    isLoading,
  };
};
