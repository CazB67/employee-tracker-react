import React from "react";
import "./style.css";

function EmployeeTable(props) {
    return (
    <tr>
      <th scope="row">{props.id}</th>
      <td>{props.name}</td>
      <td>{props.occupation}</td>
      <td>{props.email}</td>
    </tr>
      );
    }

export default EmployeeTable;