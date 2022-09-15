import { createSlice } from "@reduxjs/toolkit";

export const employeesSlice = createSlice({
  name: "employees",
  initialState: {
    employees: [],
    isLoading: false,
  },
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    setEmployees: (state, action) => {
      state.isLoading = false;
      state.employees = action.payload.data;
    },
  },
});

export const { startLoading, setEmployees} = employeesSlice.actions;
