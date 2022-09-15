import { configureStore } from '@reduxjs/toolkit'
import {employeesSlice} from '../slices/employeesSlice';
export const store = configureStore({
  reducer: employeesSlice.reducer,
})