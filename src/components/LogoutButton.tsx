import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    buttonLogout: {
        width: '100%',
    },
  });

export const LogoutButton = () => {

    const classes = useStyles();    

  return (
      <Box>
        <Button className={classes.buttonLogout} variant="contained" disableElevation>
            Cerrar Sesión
        </Button>
      </Box>
  );
};
