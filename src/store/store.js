import { combineReducers, createStore } from "redux";

const reducer = combineReducers({
    employees: employeesReducer,
    filter: filterReducer
})
export const store = createStore(
    reducer, composeWithDevTools()
)