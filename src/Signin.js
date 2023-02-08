import React, { useState } from 'react';
import axios from 'axios';
const SignIn = ({token,setToken}) => {
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const loginnn = () => {
    setError("");
    setPassword("");
    setuserName("");
    axios({
      url:"https://fakestoreapi.com/auth/login",
      method:"POST",
      data:{
      username: userName,
      password: password,
      },
    }).then(res=> {
      console.log(res.data.token);
      setToken(res.data.token);
      localStorage.setItem("userToken", res.data.token);
    }).catch((err) => {
      console.log(err.response);
      setError(err.response.data);
    })
  };

  return (
    <div>
      <label htmlFor="userName">userName:</label>
      <input
        type="userName"
        name="userName"
        value={userName}
        onChange={e => setuserName(e.target.value)}
        required
      />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <br />
      {error && <small>{error}</small>}
      <button type="submit" onClick={loginnn}>
        Login
      </button>
    </div>
  );
};

export default SignIn;
