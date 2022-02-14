import { createSlice } from '@reduxjs/toolkit';

const year = String(new Date().getFullYear());
const month = String(new Date().getMonth() + 1);
const day = String(new Date().getDate());

const extraDataSlice = createSlice({
  name: 'extraData',
  initialState: {
    date: { day, month, year },
  },
  reducers: {
    initDate: (state, action) => {
      return { ...state, date: action.payload };
    },
  },
  extraReducers: {},
});

export const { initDate } = extraDataSlice.actions;
export default extraDataSlice.reducer;
