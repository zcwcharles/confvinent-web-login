import { configureStore } from '@reduxjs/toolkit';
import signinReducer from '../modules/signin/signInSlice';
import signupReducer from '../modules/signup/signUpSlice';

export const store = configureStore({
  reducer: {
    signin: signinReducer,
    signup: signupReducer,
  },
});
