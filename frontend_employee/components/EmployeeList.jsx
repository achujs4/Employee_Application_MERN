import React, { useEffect, useState } from 'react';
import axios from 'axios';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    const token = localStorage.getItem('token');
    const res = await axios.get('/api/employees', {
      headers: { Authorization: token },
    });
    setEmployees(res.data);
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');
    await axios.delete(`/api/employees/${id}`, {
      headers: { Authorization: token },
    });
    fetchEmployees();
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div>
      <h1>Employees</h1>
      <ul>
        {employees.map((emp) => (
          <li key={emp._id}>
            {emp.name} - {emp.designation}{' '}
            <button onClick={() => handleDelete(emp._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
