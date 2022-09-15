import styled from "styled-components";

export const ContainerLFull = styled.div`
  background-color: #ccc;
  height: 90.7vh;
`;
export const ContainerL = styled.div`
  padding-top: 70px;
  margin: auto;
  max-width: 300px;
  h1 {
    font-weight: 800;
    font-size: 3rem;
    color: #3c3c3c;
  }
`;
export const Input = styled.input`
  padding: 15px;
  border-radius: 10px;
  border: 0px;
  :focus {
    color: #333;
    background-color: aliceblue;
  }
`;
export const DivInput = styled.div`
  padding-bottom: 15px;
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  label {
    padding-bottom: 8px;
    font-weight: 600;
    color: #2c2c2c;
  }
`;
export const ButtonL = styled.button`
  font-size: 18px;
  width: 160px;
  background-color: #eee;
  border-radius: 10px;
  height: 40px;
  border: 0px;
  color: #6d6d6d;
  transition: all ease 0.4s;
  :hover {
    background-color: #dbdbdb;
  }
`;
export const Err = styled.div`
  color: red;
  transition: all ease 0.4s;
`;
