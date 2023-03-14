import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../components/counter/counterSlice';
import signinReducer from '../modules/signin/signInSlice';
import signupReducer from '../modules/signup/signUpSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    signin: signinReducer,
    signup: signupReducer,
  },
});
