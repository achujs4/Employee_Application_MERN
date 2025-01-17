import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({
    employeeID: '',
    name: '',
    designation: '',
    salary: '',
    department: '',
    location: ''
  });

  const fetchEmployees = async () => {
    const token = localStorage.getItem('token');
    const res = await axios.get('/api/employees', {
      headers: { Authorization: token }
    });
    setEmployees(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    await axios.post('/api/employees', form, {
      headers: { Authorization: token }
    });
    fetchEmployees();
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div>
      <h1>Employee List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="ID" onChange={(e) => setForm({ ...form, employeeID: e.target.value })} />
        <input type="text" placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input type="text" placeholder="Designation" onChange={(e) => setForm({ ...form, designation: e.target.value })} />
        <input type="number" placeholder="Salary" onChange={(e) => setForm({ ...form, salary: e.target.value })} />
        <input type="text" placeholder="Department" onChange={(e) => setForm({ ...form, department: e.target.value })} />
        <input type="text" placeholder="Location" onChange={(e) => setForm({ ...form, location: e.target.value })} />
        <button type="submit">Add Employee</button>
      </form>
      <ul>
        {employees.map(emp => (
          <li key={emp._id}>{emp.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
