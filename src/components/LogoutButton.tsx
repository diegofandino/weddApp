import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { makeStyles } from '@mui/styles';
import { useDispatch } from 'react-redux';
import { logout } from '../actions/auth';


const useStyles = makeStyles({
    buttonLogout: {
        width: '100%',
    },
  });

export const LogoutButton = () => {

    const dispatch = useDispatch();

  const classes = useStyles();
  
  const handleLogout = () => {
      dispatch(logout());
  }

  return (
      <Box>
        <Button onClick={() => handleLogout()} className={classes.buttonLogout} variant="contained">
            Cerrar Sesión
        </Button>
      </Box>
  );
};
