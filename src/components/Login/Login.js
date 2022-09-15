import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ButtonL,
  ContainerL,
  ContainerLFull,
  DivInput,
  Err,
  Input,
} from "../../styled-components/login.styles";

const Login = () => {
  const [msg, setMsg] = useState(null);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const regexEmail =
    /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;

  const validarEmail = (e) => {
    var correoCorrecto = regexEmail.test(e.target.value);
    var esDKT = test(e.target.value);
    if (esDKT === true) {
      console.log("correo validado regexp");
    }

    if (!correoCorrecto) {
      setMsg("El email no existe");
    } else {
      setMsg(null);
    }
  };
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const checkLogin = () => {
    if (form.email === "factumex@gmail.com" && form.password === "123") {
      localStorage.setItem("user", form.user);
      setMsg(null);
      navigate("/employees");
      window.location.reload();
    } else {
      localStorage.clear();
      setMsg("Email o contraseña incorrectos...");
    }
  };

  return (
    <ContainerLFull>
      <ContainerL>
        <h1>
          <center>Login</center>
        </h1>
        <DivInput>
          <label htmlFor="username">Email</label>
          <Input
            type="text"
            name="email"
            className="form-control"
            autoComplete="off"
            onBlur={validarEmail}
            onChange={handleChange}
            value={form.email}
            required
            onPaste={(e) => {
              e.preventDefault();
              return false;
            }}
            onCopy={(e) => {
              e.preventDefault();
              return false;
            }}
          />
        </DivInput>
        <DivInput className="form-group">
          <label htmlFor="password">Contraseña</label>
          <Input
            type="password"
            name="password"
            className="form-control"
            autoComplete="off"
            onChange={handleChange}
            value={form.password}
            required
            onPaste={(e) => {
              e.preventDefault();
              return false;
            }}
            onCopy={(e) => {
              e.preventDefault();
              return false;
            }}
          />
        </DivInput>
        <DivInput>
          <center>
            <ButtonL
              className="form-control btn btn-primary bgBlue"
              onClick={checkLogin}
            >
              Iniciar sesión
            </ButtonL>
            <br />
            <br />

            {msg !== null && <Err>{msg}</Err>}
          </center>
        </DivInput>
      </ContainerL>
    </ContainerLFull>
  );
};

export default Login;
