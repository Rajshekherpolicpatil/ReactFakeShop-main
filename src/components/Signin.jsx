import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import './reg.css';
import { Container, Typography, TextField, Button} from '@mui/material';



const LoginWithoutForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({
    email: '',
    password: ''
  });
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validate = () => {
    let isError = false;
    const errors = {
      email: '',
      password: ''
    };

    if (!email) {
      isError = true;
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      isError = true;
      errors.email = "Email is invalid";
    }

    if (!password) {
      isError = true;
      errors.password = "Password is required";
    }

    setError(errors);
    return isError;
  };

  const loginnn = () => {
    const err = validate();
    if (!err) {
      const payload = users.find(user => user.email === email && user.password === password)
      if (payload) {
        dispatch({
          type: 'LOGIN',
          payload
        })
        alert("login successfully")
        navigate('/Home');
      } else {
        alert("wrong credential !!")
      }
    }
  };

  return (
    
    <Container className={'efg'}>
      <Typography variant="h3">Login</Typography>
      <TextField
        label="Email"
        type="email"
        name="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        margin="normal"
        required
        error={error.email ? true : false}
        helperText={error.email}
      />
      <br/>
      <TextField
        label="Password"
        type="password"
        name="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        margin="normal"
        required
        error={error.password ? true : false}
        helperText={error.password}
      />
            <br/>
            <br/>


      <Button variant="contained" color="primary" onClick={loginnn}>
        Submit
      </Button>
      <br/>
      <br/>

      <Typography variant="body1">
        Don't have an account? <Link to="/Registration" >Register</Link> now.
      </Typography>
    </Container>
    
  );
};

export default LoginWithoutForm;
