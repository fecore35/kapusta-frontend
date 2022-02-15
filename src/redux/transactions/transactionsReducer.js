import { createSlice } from '@reduxjs/toolkit';
import { transactionsOperation } from 'redux/transactions';
import { makeTransaction } from 'helpers/transactionsHelper';

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    isLoading: false,
    income: [],
    spending: [],
    error: null,
  },
  reducers: {},
  extraReducers: {
    [transactionsOperation.getTransactions.pending](state, action) {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    },
    [transactionsOperation.getTransactions.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        income: action.payload.income,
        spending: action.payload.spending,
      };
    },
    [transactionsOperation.getTransactions.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
    [transactionsOperation.addTransaction.pending](state, action) {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    },
    [transactionsOperation.addTransaction.fulfilled](state, action) {
      const { isIncome, data } = action.payload;
      const transaction = data.newTransaction.result;
      const transactionsType = isIncome ? 'income' : 'spending';
      const newTransaction = makeTransaction(transaction);
      const newTransactions = {
        [transactionsType]: [newTransaction, ...state[transactionsType]],
      };

      return {
        ...state,
        ...newTransactions,
        isLoading: false,
      };
    },
    [transactionsOperation.addTransaction.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
  },
});

export const {} = transactionsSlice.actions;
export default transactionsSlice.reducer;
