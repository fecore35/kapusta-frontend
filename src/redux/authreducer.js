import { createSlice } from '@reduxjs/toolkit';
import {
  registerThunk,
  loginThunk,
  currentThunk,
  logOutThunk,
  // loginGoogleThunk,
} from './asyncthunc';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    name: '',
    email: '',
    token: null,
    error: null,
    isLoading: false,
    isAuth: false,
    myLoad: 'hallo!',
    id: '',
  },
  redusers: {
    renameProp: (state, action) => {
      return { ...state, myLoad: action.payload };
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
    // [loginGoogleThunk.pending](state, action) {
    //   return {
    //     isLoading: true,
    //   };
    // },
    // [loginGoogleThunk.fulfilled](state, action) {
    //   return {
    //     ...state,
    //     isLoading: false,
    //     token: action.payload.token,
    //     id: action.payload.id,
    //     isAuth: false,
    //   };
    // },
    // [loginGoogleThunk.rejected](state, action) {
    //   return {
    //     ...state,
    //     isLoading: false,
    //     error: action.payload,
    //   };
    // },
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
        id: action.payload.id,
        isAuth: true,
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
  },
});

export const { renameProp } = authSlice.actions;
export default authSlice.reducer;
