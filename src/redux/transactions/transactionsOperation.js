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

const addTransaction = createAsyncThunk(
  'transactions/add',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post(
        `/transactions/`,
        credentials.newTransaction,
      );
      return { data: data.data, isIncome: credentials.isIncome };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const onDelete = createAsyncThunk(
  'transactions/delete',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/transactions/${credentials}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const operations = {
  getTransactions,
  addTransaction,
  onDelete,
};

export default operations;
