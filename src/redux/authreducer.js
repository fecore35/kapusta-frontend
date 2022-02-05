import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: '', email: '' },
    token: '',
    error: null,
    isLoading: false,
    isAuth: false,
    myLoad: 'hallo 1!',
  },
  redusers: {
    renameProp: (state, action) => {
      return { ...state, myLoad: action.payload };
    },
  },
  extraReducers: {
    //         [registerThunk.pending](state, action) {
    //                 return {
    //                     isLoading: true,
    //                 }
    //         },
    //         [registerThunk.fulfilled](state, action) {
    //             return {
    //                 ...state,
    //                 isLoading: false,
    //                 user: action.payload.user,
    //                 token: action.payload.token,
    //                 isAuth: true,
    //             }
    //         },
    //         [registerThunk.rejected](state, action) {
    //           return  {
    //              ...state,
    //              isLoading:false,
    //              error: action.payload,
    //           }
    //         },
    //         [loginThunk.pending](state, action) {
    //             return {
    //                 isLoading: true,
    //             }
    //     },
    //     [loginThunk.fulfilled](state, action) {
    //         return {
    //             ...state,
    //             isLoading: false,
    //             user: action.payload.user,
    //             token: action.payload.token,
    //             isAuth: true,
    //         }
    //     },
    //     [loginThunk.rejected](state, action) {
    //       return  {
    //          ...state,
    //          isLoading:false,
    //          error: action.payload,
    //       }
    //     },
    // [currentThunk.pending](state, action) {
    //         return {
    //             ...state,
    //             isLoading: true,
    //             isAuth: false,
    //         }
    // },
    // [currentThunk.fulfilled](state, action) {
    //     return {
    //         ...state,
    //         isLoading: false,
    //         user: action.payload,
    //         isAuth: true,
    //     }
    // },
    // [currentThunk.rejected](state, action) {
    //   return  {
    //      ...state,
    //      isLoading:false,
    //      error: action.payload,
    //      isAuth: false,
    //   }
    // },
    // [logOutThunk.pending](state, action) {
    //     return {
    //         ...state,
    //         isLoading: true,
    //         isAuth: false,
    //     }
    // },
    // [logOutThunk.fulfilled](state, action) {
    // return {
    //     ...state,
    //     isLoading: false,
    //     user: {name: '', email: ''},
    //     token: '',
    //     isAuth: false,
    // }
    // },
    // [logOutThunk.rejected](state, action) {
    // return  {
    //  ...state,
    //  isLoading:false,
    // //  error: action.payload,
    //  isAuth: false,
    // }
    // },
  },
});

export const { renameProp } = authSlice.actions;
export default authSlice.reducer;
