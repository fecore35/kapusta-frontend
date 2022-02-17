import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
import {
  registerThunk,
  loginThunk,
  currentThunk,
  logOutThunk,
  userGetTransaction,
  userPutBallance,
} from './asyncthunc';
import { transactionsOperation } from 'redux/transactions';

axios.defaults.baseURL = 'https://kapusta-35.herokuapp.com';
// axios.defaults.baseURL = 'http://localhost:5000';

const token = Object.freeze({
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    name: '',
    email: '',
    token: null,
    error: null,
    isLoading: false,
    isAuth: false,
    id: '',
    balance: '0',
    rebalancing: false,
  },
  reducers: {
    initUser: (state, action) => {
      token.set(action.payload.user.token);
      return { ...state, ...action.payload.user, isAuth: true };
    },
  },
  extraReducers: {
    [registerThunk.pending](state, action) {
      return {
        isLoading: true,
      };
    },
    [registerThunk.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        name: action.payload.name,
        email: action.payload.email,
        id: action.payload.id,
        isAuth: false,
      };
    },
    [registerThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
    [loginThunk.pending](state, action) {
      return {
        isLoading: true,
      };
    },
    [loginThunk.fulfilled](state, action) {
      token.set(action.payload.token);
      return {
        ...state,
        isLoading: false,
        token: action.payload.token,
        id: action.payload.id,
        isAuth: false,
      };
    },
    [loginThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
    [currentThunk.pending](state, action) {
      return {
        ...state,
        isLoading: true,
        isAuth: false,
      };
    },
    [currentThunk.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        name: action.payload.name,
        email: action.payload.email,
        isAuth: true,
        balance: action.payload.balance,
        rebalancing: action.payload.rebalancing,
      };
    },
    [currentThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        isAuth: false,
      };
    },
    [logOutThunk.pending](state, action) {
      return {
        ...state,
        isLoading: true,
        isAuth: false,
      };
    },
    [logOutThunk.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        name: '',
        email: '',
        token: '',
        isAuth: false,
      };
    },
    [logOutThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        //  error: action.payload,
        isAuth: false,
      };
    },
    [userGetTransaction.pending](state, action) {
      return {
        ...state,
        isLoading: true,
      };
    },
    [userGetTransaction.fulfilled](state, action) {
      return {
        ...state,
        balance: action.payload.currentBalance,
      };
    },
    [userGetTransaction.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
      };
    },
    [userPutBallance.pending](state, action) {
      return {
        ...state,
        isLoading: true,
      };
    },
    [userPutBallance.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        rebalancing: true,
      };
    },
    [userPutBallance.rejected](state, action) {
      return {
        ...state,
        balance: '0',
        isLoading: false,
      };
    },
    [transactionsOperation.addTransaction.fulfilled](state, action) {
      const { data } = action.payload;
      const newBalance = data.newTransaction.balance;

      return {
        ...state,
        balance: newBalance,
      };
    },
    [transactionsOperation.onDelete.fulfilled](state, action) {
      const { data } = action.payload;
      const newBalance = data.updatedBalance;

      return {
        ...state,
        balance: newBalance,
      };
    },
  },
});

export const { initUser } = authSlice.actions;
export default authSlice.reducer;
