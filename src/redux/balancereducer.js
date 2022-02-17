import { createSlice } from '@reduxjs/toolkit';

const balanceSlice = createSlice({
  name: 'balance',
  initialState: {
    balance: 0,
    spent: 0,
    earned: 0,
    myLoad: 'hallo!',
    expenseСategory: [],
  },
  redusers: {
    renameProp: (state, action) => {
      return { ...state, myLoad: action.payload };
    },
  },
  extraReducers: {},
});

export const { renameProp } = balanceSlice.actions;
export default balanceSlice.reducer;
