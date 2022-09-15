import {
  HashRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/Routes/AppRouter";
import { GlobalStyle } from "./styled-components/GlobalStyles";
import Employees from "./components/Employees/Employees";
import Upload from "./components/Upload/Upload";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getEmployees } from "./slices/thunks";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          <Route path="/home" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />

          <Route
            path="/employees"
            element={<PrivateRoute Component={Employees} />}
          />
          <Route path="/upload" element={<PrivateRoute Component={Upload} />} />

          <Route path="*" exact element={<Navigate to="/home" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
