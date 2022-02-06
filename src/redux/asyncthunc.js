import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_USER_URL = 'http://localhost:8081';
const userLogin = '/api/auth/login';
const userRegister = '/api/auth/registration';
const userLogOut = '/api/auth/logout';
const userCurrent = '/api/users/:id';

export const registerThunk = createAsyncThunk(
  'users/register',
  async (user, { rejectWithValue }) => {
    try {
      const response = await fetch(BASE_USER_URL + userRegister, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();

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
      const response = await fetch(BASE_USER_URL + userLogin, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
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
    console.log('currentThunk', state.auth.token);
    if (state.auth.token) {
      try {
        const response = await fetch(BASE_USER_URL + userCurrent, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Autorization: state.auth.token,
            id: state.auth.id,
          },
        });
        console.log(response);
        const data = await response.json();
        console.log(data);
        return data.data;
      } catch (error) {
        console.log(error);
        return rejectWithValue({
          error: error.message,
        });
      }
    }
  },
);
