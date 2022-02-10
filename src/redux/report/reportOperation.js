import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getCategory = createAsyncThunk(
  'report/category',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.get('/transactions/stats', credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const operations = {
  getCategory,
};

export default operations;
