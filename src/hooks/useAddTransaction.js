import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userPutBallance } from 'redux/asyncthunc';
import {
  transactionsSelectors,
  transactionsOperation,
} from 'redux/transactions';

export const useAddTransaction = data => {
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
    dispatch(transactionsOperation.addTransaction(data));
    dispatch(userPutBallance());

    // dispatch(transactionsOperation.getTransactions());
  }, [data, dispatch]);

  return {
    income: incomeTransactions,
    spending: spendingTransactions,
    error: transactionsError,
    isLoading,
  };
};
