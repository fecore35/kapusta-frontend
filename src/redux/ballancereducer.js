import { createSlice } from '@reduxjs/toolkit';

const balanceSlice = createSlice({
  name: 'balance',
  initialState: {
    income: 0,
    consumption: 0,
    balance: 0,
    dataNow: '',
    notyfication: [],
    consumptionList: [],
    incomeList: [],
  },
  redusers: {
    renameProp: (state, action) => {
      return { ...state, myLoad: action.payload };
    },
  },
  extraReducers: {},
});

export default balanceSlice.reducer;
