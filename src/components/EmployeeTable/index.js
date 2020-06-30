import React from "react";
import "./style.css";

function EmployeeTable(props) {
  console.log(props);
    return (
    <tbody>
    <tr>
      <th scope="row">{props.id}</th>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.occupation}</td>
      <td>{props.email}</td>
    </tr>
    </tbody>
      );
    }

export default EmployeeTable;