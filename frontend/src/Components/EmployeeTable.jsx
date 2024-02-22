import React, { useState } from 'react';
import EmployeeList from "./EmployeeList"
import EmployeeView from "./EmployeeView"
function EmployeeTable({ employees }) {
    const [selectedEmployee, setSelectedEmployee] = useState(null);
  
    const handleEmployeeSelect = (employee) => {
      setSelectedEmployee(employee);
    };
  
    return (
      <div>
        <h1>Directors Page</h1>
        <EmployeeList employees={employees} />
        {selectedEmployee && <EmployeeView employee={selectedEmployee} handler = {handleEmployeeSelect}/>}
      </div>
    );
  }

  export default EmployeeTable;