import { createSlice } from '@reduxjs/toolkit';

const authenticationSlice = createSlice({
   name: 'authentication',
   initialState: {
      accessToken: null,
      refreshToken: null,
      loading: false,
   },

   reducers: {
      setAcessToken(state, action) {
         state.accessToken = action.payload.accessToken;
         state.loading = false;
      },
      setRefreshToken(state, action) {
         state.refreshToken = action.payload.refreshToken;
         state.loading = false;
      },
      setLoadingTrue(state) {
         state.loading = true;
      },
      setLoadingFalse(state) {
         state.loading = false;
      },
   },
});

export const {
   setAcessToken,
   setRefreshToken,
   setLoadingTrue,
   setLoadingFalse,
} = authenticationSlice.actions;

export default authenticationSlice.reducer;
