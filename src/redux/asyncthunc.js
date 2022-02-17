import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { alert } from '@pnotify/core';
axios.defaults.baseURL = 'https://kapusta-35.herokuapp.com';
// axios.defaults.baseURL = 'http://localhost:5000';

const userLogin = '/auth/login';
const userRegister = '/auth/registration';
const userLogOut = '/auth/logout';
const userCurrent = '/users/';
const userTransaction = '/transactions/';
const userBalance = '/users/balance ';

export const registerThunk = createAsyncThunk(
  'users/register',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(userRegister, { ...user });

      alert({
        text: 'Регистрация прошла успешно, нажмите кнопку войти',
        delay: 1500,
        hide: true,
      });
      return data.data;
    } catch (error) {
      alert({
        text: 'Такой пользователь уже есть, попробуйте другое имя или нажмите кнопку войти',
        delay: 1500,
        hide: true,
      });
      return rejectWithValue(error);
    }
  },
);

export const loginThunk = createAsyncThunk(
  'users/login',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(userLogin, { ...user });
      // !data.data.rebalancing ? alert(`С возвращением, ${user.email}`) :

      alert({
        text: `Добро пожаловать, ${user.email}`,
        delay: 1500,
        hide: true,
      });

      // alert(`Добро пожаловать, ${user.email}`);
      // console.log(alert);

      return data.data;
    } catch (error) {
      alert({
        text: 'Нету такого пользователя, попробуйте другое',
        delay: 1500,
        hide: true,
      });
      return rejectWithValue({
        error,
      });
    }
  },
);

export const currentThunk = createAsyncThunk(
  'users/current',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    if (state.auth.token) {
      try {
        const { data } = await axios.get(userCurrent + state.auth.id);
        return data.data;
      } catch (error) {
        return rejectWithValue({
          error: error.message,
        });
      }
    }
  },
);

export const logOutThunk = createAsyncThunk(
  'users/logout',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    if (state.auth.token) {
      try {
        const response = await axios.post(userLogOut);
        return response.data.statusText;
      } catch (error) {
        return rejectWithValue({
          error: error.message,
        });
      }
    }
  },
);

// export const currentUserTransaction = createAsyncThunk(
//   'users/transaction',
//   async (_, { rejectWithValue, getState }) => {
//     const state = getState();
//     if (state.auth.token) {
//       try {
//         const {data} = await axios.get(userTransaction)
//         console.log(data.data);
//          return data.data;
//       } catch (error) {
//         return rejectWithValue({
//           error: error.message,
//         });
//       }
//     }
//   },
// );

export const userGetTransaction = createAsyncThunk(
  'users/transaction',
  async (transactions, { rejectWithValue, getState }) => {
    const state = getState();
    if (state.auth.token) {
      try {
        const { data } = await axios.post(userTransaction, { ...transactions });
        return data.data;
      } catch (error) {
        return rejectWithValue({
          error: error.message,
        });
      }
    }
  },
);

export const userPutBallance = createAsyncThunk(
  'users/balance',
  async (ballance, { rejectWithValue, getState }) => {
    const state = getState();
    if (state.auth.token) {
      try {
        const data = await axios.put(userBalance, {
          id: state.auth.id,
          balance: ballance,
        });
        return data.data;
      } catch (error) {
        return rejectWithValue({
          error: error.message,
        });
      }
    }
  },
);
