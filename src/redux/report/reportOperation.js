import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getCategory = createAsyncThunk(
  'report/category',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `/transactions/stats/${credentials.month}/${credentials.year}`,
      );
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
