import React, { useState } from 'react';
import axios from 'axios';

function AddEmployee() {
  const [form, setForm] = useState({
    employeeID: '',
    name: '',
    designation: '',
    salary: '',
    department: '',
    location: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    await axios.post('/api/employees', form, {
      headers: { Authorization: token },
    });
    alert('Employee added successfully');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Employee ID"
        value={form.employeeID}
        onChange={(e) => setForm({ ...form, employeeID: e.target.value })}
      />
      <input
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Designation"
        value={form.designation}
        onChange={(e) => setForm({ ...form, designation: e.target.value })}
      />
      <input
        type="number"
        placeholder="Salary"
        value={form.salary}
        onChange={(e) => setForm({ ...form, salary: e.target.value })}
      />
      <input
        type="text"
        placeholder="Department"
        value={form.department}
        onChange={(e) => setForm({ ...form, department: e.target.value })}
      />
      <input
        type="text"
        placeholder="Location"
        value={form.location}
        onChange={(e) => setForm({ ...form, location: e.target.value })}
      />
      <button type="submit">Add Employee</button>
    </form>
  );
}

export default AddEmployee;
