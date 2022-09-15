import styled from "styled-components";

export const Input = styled.input`
  margin: 20px;
  width: 400px;
  background: #fff;
  color: #a3a3a3;
  font: inherit;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
  border: 0;
  outline: 0;
  padding: 22px 18px;
  font-size: 13px;
`;
export const DivContent = styled.div`
  max-width: 800px;
  margin: auto;
  padding-top: 40px;
  background-color: white;
`;
export const Table = styled.table`
  border: 2px solid #ffffff;
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  td:nth-child(even) {
    background: #ebebeb;
  }
  td,
  th {
    border: 1px solid #ffffff;
    padding: 10px 4px;
  }
  td {
    font-size: 13px;
  }
  thead {
    background: #ffffff;
    border-bottom: 4px solid #333333;
  }
  th {
    font-size: 15px;
    font-weight: bold;
    color: #333333;
    text-align: center;
    border-left: 2px solid #333333;
  }
  th:first-child {
    border-left: none;
  }

  tfoot {
    font-size: 14px;
    font-weight: bold;
    color: #333333;
    border-top: 4px solid #333333;
    td {
      font-size: 14px;
    }
  }
  tfoot {
    text-align: center;
  }
  button {
    display: inline-block;
    background: #3c3c3c;
    color: #ffffff;
    padding: 2px 8px;
    border-radius: 5px;
    margin-right: 15px;
    margin-left: 15px;
  }
`;
