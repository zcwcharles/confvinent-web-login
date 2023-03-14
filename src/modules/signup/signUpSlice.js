import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { message } from 'antd';
import { signUpPost } from './signUpAPI';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  organization: '',
  address: '',
  password: '',
  reEnterPassword: '',
  uiState: {
    signingUp: false,
  },
};

export const signUpThunk = createAsyncThunk(
  'signUpPost',
  async (_, { getState })=> {
    const {
      signup: {
        firstName,
        lastName,
        email,
        organization,
        address,
        password,
      },
    } = getState();

    try {
      const resp = await signUpPost({
        firstName,
        lastName,
        email,
        organization,
        address,
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
  reducers: {
    firstNameChange: (state, action) => {
      state.firstName = action.payload;
    },
    lastNameChange: (state, action) => {
      state.lastName = action.payload;
    },
    emailChange: (state, action) => {
      state.email = action.payload;
    },
    organizationChange: (state, action) => {
      state.organization = action.payload;
    },
    addressChange: (state, action) => {
      state.address = action.payload;
    },
    passwordChange: (state, action) => {
      state.password = action.payload;
    },
    reEnterPasswordChange: (steate, action) => {
      steate.reEnterPassword = action.payload;
    },
  },
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

export const {
  firstNameChange,
  lastNameChange,
  emailChange,
  organizationChange,
  addressChange,
  passwordChange,
  reEnterPasswordChange,
} = signUpSlice.actions;

export default signUpSlice.reducer;
