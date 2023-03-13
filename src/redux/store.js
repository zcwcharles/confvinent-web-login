import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../components/counter/counterSlice';
import signinReducer from '../modules/signin/signInSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    signin: signinReducer,
  },
});
