
import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './Reducers';

const store = configureStore({
  reducer: {
    chat: chatReducer,
  },
});

export default store;
