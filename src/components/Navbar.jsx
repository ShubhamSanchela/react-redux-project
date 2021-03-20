import React, { useState, useEffect } from "react";
import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/users";

const Navbar = () => {
  const [employees, setEmployees] = useState([]);
  console.log(employees)

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get(URL);
    setEmployees(response.data); 
  };

  const removeData = (id) => {
    axios.delete(`${URL}/${id}`).then((res) => {
      const del = employees.filter((employee) => id !== employee.id);
      setEmployees(del);
    });
  };

  const renderBody = () => {
    return (
      employees &&
      employees.map(({ id, name }) => {
        return (
          <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td className="opration">
              <button className="button" onClick={() => removeData(id)}>
                Delete
              </button>
            </td>
          </tr>
        );
      })
    );
  };

  return (
    <>
      <h1 id="title">React Table</h1>
      <table id="employee">
        <thead></thead>
        <tbody>{renderBody()}</tbody>
      </table>
    </>
  );
};

export default Navbar;
