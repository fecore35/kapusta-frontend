import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://kapusta-35.herokuapp.com';
axios.defaults.baseURL = 'http://localhost:5000';

const userLogin = '/auth/login';
const userRegister = '/auth/registration';
const userLogOut = '/auth/logout';
const userCurrent = '/users/';
const userTransaction = '/transactions/';


export const registerThunk = createAsyncThunk(
  'users/register',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(userRegister,{...user}      
      );

      if (data.code === 409) {
        alert('Такой пользователь уже есть, попробуйте другое имя');
        throw new Error('Required');
      }
      return data.data;
    } catch (error) {
      return rejectWithValue({
        error: error.message,
      });
    }
  },
);

export const loginThunk = createAsyncThunk(
  'users/login',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(userLogin, {...user}    
        );
      // console.log(data);
      if (!data.data.token) {
        alert('Нету такого пользователя, попробуйте другое имя');
        throw new Error('Required');
      }
      return data.data;
    } catch (error) {
      return rejectWithValue({
        error: error.message,
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
        const {data} = await axios.get(userCurrent+state.auth.id)
        // console.log(data);
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
        const response = await axios.post(userLogOut)
        return response.data.statusText;
      } catch (error) {
        return rejectWithValue({
          error: error.message,
        });
      }
    }
  },
);

export const currentUserTransaction = createAsyncThunk(
  'users/transaction',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    if (state.auth.token) {
      try {
        const {data} = await axios.get(userTransaction)
        console.log(data.data);
        return data.data;
      } catch (error) {
        return rejectWithValue({
          error: error.message,
        });
      }
    }
  },
);

export const userGetTransaction = createAsyncThunk(
  'users/transaction',
  async (transactions, { rejectWithValue, getState }) => {
    const state = getState();
    if (state.auth.token) {
      try {
        const {data} = await axios.post(userTransaction, {...transactions})
        console.log(data);
        return data.data;
      } catch (error) {
        return rejectWithValue({
          error: error.message,
        });
      }
    }
  },
);
