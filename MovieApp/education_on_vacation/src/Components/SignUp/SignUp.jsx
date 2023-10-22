import '../SignUp/SignUp.css'
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
import { useState } from 'react';
import { useNavigate } from 'react-router';


function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const defaultTheme = createTheme();

export default function SignUp() {

  const [loginSuccessfull, setLoginSucessfull ] = useState(true)
  const navigate = useNavigate()

  const handleSubmit =  (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget);
    const response = fetch('http://localhost:3000/signUp', {
        method:"POST",
        headers: {
            "Content-type":"application/json"
        },
  
        body: JSON.stringify({
            username: data.get('username'),
            password: data.get('password'),
        
        })

    }).then((value) => value.json())
    .then(async (data) =>{
      setLoginSucessfull(data)
      navigate("/");
    })
    .catch((err)=> console.log(err))
  }

    return (
        <div className='containerForSignUp'>
        <ThemeProvider theme={defaultTheme} >
        <Container component="main" maxWidth="xs" >
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
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    color='secondary'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    color='secondary'

                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="username"
                    label="Email Address"
                    name="username"
                    autoComplete="email"
                    color='secondary'

                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    color='secondary'

                  />
                </Grid>
                <Grid item xs={12}>
                </Grid>
              </Grid>
              {!loginSuccessfull ?  
            <h5>User already have an account</h5> : <h5>User is logged in</h5>}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color='secondary'
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/signIn" variant="body2" color='secondary'>
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
      </div>
    )
}



