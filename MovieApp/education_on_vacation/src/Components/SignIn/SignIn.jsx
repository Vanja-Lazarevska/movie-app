import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../SignIn/SignIn.css'
import { useState } from 'react';
import { useNavigate } from 'react-router';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.primary" align="center" {...props}>
      {'Copyright © '}
        Movie Lab
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignIn({setToken}) {

  const [loginSuccessfull, setLoginSucessfull ] = useState(true)
  const navigate = useNavigate()

  const handleSubmit =  (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const response = fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        "Content-type":"application/json"
      },
      body: JSON.stringify({
        username: data.get('username'),
        password: data.get('password'),
    
      })
    })
    .then(async (value)=> {
      if(!value.ok){
        setLoginSucessfull(false)
        setToken(undefined)
      }else{
        var token = await value.json()
        localStorage.setItem("token", token.access_token)
      
        setToken(token.access_token)
        navigate('/')
        
      }
      
    })
    console.log('TOKEN')
  };

        // const token = localStorage.getItem('token')
      //   const response = await fetch(apiURL, {
      //     method: 'POST',
      //     headers: {
      //         'Content-type': 'application/json',
      //         'Authorization': `Bearer ${token}`, // 
      //     },
      //     body: JSON.stringify(yourNewData)
      // })


  return (
    <div className='containerForSignIn'>
 
    <ThemeProvider theme={defaultTheme} >
      <Container component="main" maxWidth="xs" color='secondary'>
        <CssBaseline />
        <Box
          sx={{
            padding: 2,
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: "rgb(255, 224, 212, 0.832)",
          
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" >
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Email Address"
              name="username"
              autoComplete="email"
              autoFocus
              color="secondary"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password "
              type="password"
              id="password"
              autoComplete="current-password"
              color="secondary"
            />
            {!loginSuccessfull ?  
            <h5>Enter a valid username or password</h5> : <h5></h5>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color='secondary'
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" color='secondary'>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href='/signUp' variant="body2" color='secondary'>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </div>
  );
}
