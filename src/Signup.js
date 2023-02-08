import React, { useState } from 'react';
import axios from 'axios';

function AddUser() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('https://fakestoreapi.com/users', user);
      if (response.status === 201) {
        console.log('Success: User added');
      }
    } catch (error) {
      console.error('Error: Failed to add user');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Name" />
      <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Email" />
      <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Password" />
      <button type="submit">Add User</button>
    </form>
  );
}

export default AddUser;
