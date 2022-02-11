import { createSlice } from '@reduxjs/toolkit';
import { reportOperation } from 'redux/report';

const reportSlice = createSlice({
  name: 'report',
  initialState: {
    isLoading: false,
    month: '1',
    year: '2022',
    category: [],
    currentCategory: null,
    income: true,
    transactions: [],
    error: null,
  },
  reducers: {
    reportType: (state, action) => {
      return { ...state, income: action.payload };
    },
    reportMonth: (state, action) => {
      return { ...state, month: action.payload };
    },
    reportYear: (state, action) => {
      return { ...state, year: action.payload };
    },
    reportCategory: (state, action) => {
      return { ...state, currentCategory: action.payload };
    },
  },
  extraReducers: {
    [reportOperation.getCategory.pending](state, action) {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    },
    [reportOperation.getCategory.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        category: action.payload.data.categoriesSum,
      };
    },
    [reportOperation.getCategory.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
  },
});

export const { reportType, reportMonth, reportYear, reportCategory } =
  reportSlice.actions;
export default reportSlice.reducer;
