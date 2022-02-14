import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getTransactions = createAsyncThunk(
  'transactions/list',
  async (_credentials, thunkAPI) => {
    console.log(
      '🚀 ~ file: transactionsOperation.js ~ line 8 ~ axios.defaults.headers.common.Authorization',
      axios.defaults.headers.common.Authorization,
    );
    if (!axios.defaults.headers.common.Authorization) {
      return;
    }

    try {
      const { data } = await axios.get(`/transactions/`);
      console.log(
        '🚀 ~ file: transactionsOperation.js ~ line 14 ~ data.data',
        data.data,
      );
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const operations = {
  getTransactions,
};

export default operations;
