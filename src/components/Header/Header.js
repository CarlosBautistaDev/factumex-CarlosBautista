import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  DivClose,
  Menu,
  NavBar,
  Toggle,
  Txt,
} from "../../styled-components/navbar.styles";
import {
  faBars,
  faPersonWalkingArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);
  return (
    <div>
      <NavBar>
        <Txt>FACTUMEX - Carlos Bautista</Txt>
        {localStorage.getItem("user") ? (
          <DivClose
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
          >
            <FontAwesomeIcon icon={faPersonWalkingArrowRight} size="2x" />
          </DivClose>
        ) : (
          ""
        )}
      </NavBar>

      <Toggle className="toggle" onClick={() => setToggle(!toggle)}>
        <a>
          <i>
            {" "}
            <FontAwesomeIcon icon={faBars} size="2x" />
          </i>
        </a>
      </Toggle>
      <Menu className={toggle ? "menu active" : "menu"}>
        <ul>
          <li>
            <Link to={'/home'} onClick={() => setToggle(false)}>Home</Link>
          </li>
          <li>
            <Link to={'/login'} onClick={() => setToggle(false)}>Login</Link>
          </li>

          {localStorage.getItem("user") ? (
            <>
              <li>
                <Link to={'/employees'} onClick={() => setToggle(false)}>Employees</Link>
              </li>
              <li>
                <Link to={'/upload'} onClick={() => setToggle(false)}>Upload</Link>
              </li>
            </>
          ) : (
            ""
          )}
        </ul>
      </Menu>
    </div>
  );
};

export default Header;
