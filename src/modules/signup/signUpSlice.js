import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { message } from 'antd';
import { signUpPost } from './signUpAPI';

const initialState = {
  uiState: {
    signingUp: false,
  },
};

export const signUpThunk = createAsyncThunk(
  'signUpPost',
  async (payload)=> {
    const {
      address,
      email,
      firstName,
      lastName,
      organization,
      password,
    } = payload;

    try {

      const resp = await signUpPost({
        address,
        email,
        firstName,
        lastName,
        organization,
        password,
      });
      return resp;
    } catch(err) {
      message.error('Sign Up fail!');
      throw err;
    }
  }
);

const signUpSlice = createSlice({
  name: 'signup',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signUpThunk.pending, state => {
        state.uiState.signingUp = true;
      })
      .addCase(signUpThunk.fulfilled, state => {
        state.uiState.signingUp = false;
      })
      .addCase(signUpThunk.rejected, state => {
        state.uiState.signingUp = false;
      })
  }
});

export default signUpSlice.reducer;
