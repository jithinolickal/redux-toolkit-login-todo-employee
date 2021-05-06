import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux-slice/counterSlice';
import employeeSlice from '../redux-slice/employeeSlice';
import loginSlice from '../redux-slice/loginSlice';
import todoSlice from '../redux-slice/todoSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    todos : todoSlice,
    employee : employeeSlice,
    login: loginSlice,
  },
});
