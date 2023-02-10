import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {Typography } from '@mui/material';
import './reg.css';

const Registration = () => {
  const [name, setName]= useState('')
  const [email, setemail]= useState('') 
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigate = useNavigate();

  const dispatch = useDispatch()
  const register = () =>{
    if (!name) {
      alert("Name field is required");
      return;
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      alert("Email is not valid");
      return;
    }
    if (password.length < 4) {
      alert("Password must be at least 4 characters long");
      return;
    }
    if (password !== confirmPassword) {
      alert("Confirm password does not match password");
      return;
    }
    dispatch({
      type:'REGISTER',
      payload : {
        id :(new Date).getTime(),
        name,email,password
      }
    })
    navigate("/Signin")
  }
  
  return (
    <>
      <form className={'xyz'}>
      <Typography variant="h3">Registration</Typography>
<br/>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField 
              id="name" 
              label="Name" 
              value={name} 
              onChange={e => setName(e.target.value)} 
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              id="email" 
              label="Email" 
              value={email} 
              onChange={e => setemail(e.target.value)} 
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              id="password" 
              label="Password" 
              type="password" 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              id="confirmPassword" 
              label="Confirm Password" 
              type="password" 
              value={confirmPassword} 
              onChange={e => setConfirmPassword(e.target.value)} 
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={register}>
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
      <Box mt={3} className={'abc'}>
        I have an account go to<Link to="/Signin"> Signin</Link> now.
      </Box>
    </>
  )
}


export default Registration
