import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  DivContent,
  Input,
  Table,
} from "../../styled-components/employees.styles";

const Employees = () => {
  const { employees = [] } = useSelector((state) => state.employees);
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState("");
  const filterEmployees = () => {
    if (search === 0) {
      return employees.slice(currentPage, currentPage + 10);
    } else {
      const filtered = employees.filter(
        (employ) =>
          employ.name.includes(search) || employ.last_name.includes(search)
      );
      return filtered.slice(currentPage, currentPage + 10);
    }
  };
  const nextPage = () => {
    if (
      employees.filter(
        (employ) =>
          employ.name.includes(search) || employ.last_name.includes(search)
      ).length >
      currentPage + 10
    ) {
      setCurrentPage(currentPage + 10);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 10);
    }
  };
  const onSearchChange = ({ target }) => {
    setCurrentPage(0);
    setSearch(target.value);
  };
  return (
    <DivContent>
      <h2> Lista de Empleados</h2>
      <h3>
        Buscador:
        <Input
          type="text"
          placeholder="Escribe el nombre"
          value={search}
          onChange={(e) => {
            onSearchChange(e);
          }}
        />
      </h3>

      <Table className="greyGridTable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Last Name</th>
            <th>Bitrhday</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <td colSpan={4}>
              <div className="links">
                <button onClick={() => prevPage()}>« Prev</button>

                <button onClick={() => nextPage()}>Next »</button>
              </div>
            </td>
          </tr>
        </tfoot>
        <tbody>
          {filterEmployees().map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.last_name}</td>
              <td>{employee.birthday}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </DivContent>
  );
};

export default Employees;
