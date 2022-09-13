import styled from "styled-components";

export const NavBar = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);
`;
export const Txt = styled.div`
  margin: auto;
  color: #fff;
  font-weight: 700;
  font-size: 32px;
  `;
export const Toggle = styled.div`
  position: fixed;
  top: 12px;
  left: 40px;
  z-index: 2;
  a {
    text-decoration: none;
    color: #ccc;
    font-size: 17px;
    cursor: pointer;
  }
  a:hover {
    color: #bdbdbd;
  }
`;
export const Menu = styled.div`
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 1;
  transition: 0.5s;
  ul {
    margin: 0;
    padding: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  li {
    list-style: none;

    a {
      padding: 10px;
      display: inline-block;
      font-family: verdana;
      font-size: 2em;
      text-decoration: none;
      text-transform: uppercase;
      color: #262626;
      border-radius: 8px;
      transition: all ease 0.4s;
    }
    a:hover {
      background: #e6e6e6;
    }
  }
  &.active {
    left: 0;
    overflow: auto;
  }
`;
export const DivClose = styled.div`
margin-top: 14px;
margin-left: -20px;
padding-right: 20px;
color: #971515;
`;