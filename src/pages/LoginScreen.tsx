import React from 'react';
import { useForm, Controller } from "react-hook-form";

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { loginModel } from '../models/loginModel';
import Divider from '@mui/material/Divider';
import LockIcon from '@mui/icons-material/Lock';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';

const useStyles = makeStyles({
  containerMiddle: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eceff7'
  },
  boxLoginAndRegister: {
    padding: '100px 40px',
    border: '1px solid #c5c5c5',
    borderRadius: '15px',
    backgroundColor: '#ffffff',
  },
  errorsMessages: {
    color: '#d32f2f',
    fontWeight: 600,
    paddingTop: 10,
  },
  centerTitlesAndSub: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  styleFields: {
    marginTop: 10,
    marginBottom: 10,
    width: '100%'
  },
  sizeBox :{
    width: '100%'
  }
})

export const LoginScreen = () => {

  const classes = useStyles();
  const dispatch = useDispatch();

  const { register, handleSubmit, watch, control, formState: { errors } } = useForm<loginModel>();
  const onSubmit = handleSubmit(data => dispatch(login(data)));

  return (
    <Grid container className={classes.containerMiddle} justifyContent="center" alignItems="center" spacing={2} direction="column">
     <Box className={classes.boxLoginAndRegister}> 
        <Grid >
          <Box className={classes.centerTitlesAndSub}>
            <Typography variant="h4" gutterBottom component="div">
              Bienvenido a WeddApp
            </Typography>
          </Box>
          <Box className={classes.centerTitlesAndSub}>
            <Typography  alignItems={'center'} variant="body1" gutterBottom>
              ¡Aquí podrás planear toda tu Boda de manera facil y rápida!
            </Typography>
          </Box>
        </Grid>
        <Grid >
          <form >
              <Box mt={3} mb={3} className={classes.sizeBox}>

              <Controller
                  control={control}
                  name='email'
                  render={({ field }) => (
                    <TextField
                      fullWidth 
                      className={classes.styleFields}
                      {...register("email")}
                      id="outlined-required"
                      label="Correo electrónico"
                      placeholder="Correo electrónico"
                      InputProps={{
                        endAdornment: <InputAdornment position="start"> @ </InputAdornment>,
                      }}
                    />
                  )}
                  rules={{ required: true, pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}}
                />
                {errors?.email?.type === 'required' && 
                <Box className={classes.errorsMessages}>
                   Correo electrónico es requerido
                </Box>
                }
                {errors?.email?.type === 'pattern' && 
                <Box className={classes.errorsMessages}>
                   Ingrese un correo electrónico válido
                </Box>
                }
            </Box>
            <Box mt={3} mb={3} className={classes.sizeBox}>     
                
                <Controller
                  control={control}
                  name='password'
                  render={({ field }) => (
                    <TextField
                      fullWidth 
                      {...register("password")}
                      className={classes.styleFields}
                      id="outlined-required"
                      label="Contraseña"
                      placeholder="Contraseña"
                      InputProps={{
                        endAdornment: <InputAdornment position="start"> <LockIcon /> </InputAdornment>,
                      }}
                    />
                  )}
                  rules={{ required: true }}
                />
                {errors?.password && 
                <Box className={classes.errorsMessages}>
                   La contraseña es requerida
                </Box>
                }
            </Box>
            <Box>
              <Button onClick={onSubmit} variant="contained" fullWidth disableElevation>
                Ingresar
              </Button>
            </Box>
          </form>
        </Grid>
      </Box>
    </Grid>
  );
};
