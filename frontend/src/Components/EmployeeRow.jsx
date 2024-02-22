function EmployeeRow({ employee , handler}) {
    console.log(employee);
    return (
      <tr onClick={() => handler(employee)}>
        <td>{employee.name}</td>
        <td>{employee.role}</td>
        <td>{employee.status}</td>
      </tr>
    );
  }
  export default EmployeeRow;