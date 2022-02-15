import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getTransactions = createAsyncThunk(
  'transactions/list',
  async (_credentials, thunkAPI) => {
    try {
      const { data } = await axios.get(`/transactions/`);
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
