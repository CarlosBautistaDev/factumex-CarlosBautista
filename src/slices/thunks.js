import axios from "axios";
import { startLoading, setEmployees } from "./employeesSlice";

export const getEmployees = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoading());

    const res = await axios.get(process.env.REACT_APP_API_GET);
    dispatch(setEmployees(res.data));
  };
};
