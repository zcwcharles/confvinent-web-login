import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';
import _isEmpty from 'lodash/isEmpty';
import { message } from 'antd';
import { signInPost } from './sigInAPI';

const initialState = {
  email: '',
  password: '',
  uiState: {
    signingIn: false,
    emailValid: true,
    passwordValid: true,
  }
};

const setValidStatus = createAction('setValidStatus');

export const signInThunk = createAsyncThunk(
  'signInPost',
  async (_, { getState, dispatch }) => {
    const {
      signin: {
        email,
        password,
      }
    } = getState();
    if (_isEmpty(email) || _isEmpty(password)) {
      dispatch(setValidStatus({
        emailValid: !_isEmpty(email),
        passwordValid: !_isEmpty(password),
      }));
      return null;
    } else {
      try {
        const resp = await signInPost({ email, password });
        message.success('Signed in!');
        return resp.message;
      } catch(err) {
        message.error('Sign in failed');
        throw err;
      }
    }
  }
);

const signInSlice = createSlice({
  name: 'signin',
  initialState,
  reducers: {
    emailChange: (state, action) => {
      state.email = action.payload;
      state.uiState.emailValid = !_isEmpty(action.payload);
    },
    passwordChange: (state, action) => {
      state.password = action.payload;
      state.uiState.passwordValid = !_isEmpty(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInThunk.pending, state => {
        state.uiState.signingIn = true;
      })
      .addCase(signInThunk.fulfilled, state => {
        state.uiState.signingIn = false;
      })
      .addCase(signInThunk.rejected, state => {
        state.uiState.signingIn = false;
      })
      .addCase(setValidStatus, (state, action) => {
        const { emailValid, passwordValid } = action.payload;
        state.uiState.emailValid = emailValid;
        state.uiState.passwordValid = passwordValid;
      })
  }
});

export const { emailChange, passwordChange } = signInSlice.actions;

export const stateSelector = state => {
  const {
    uiState: {
      signingIn,
      emailValid,
      passwordValid,
    },
  } = state.signin;

  return {
    signingIn,
    emailValid,
    passwordValid,
  }
}

export default signInSlice.reducer;
