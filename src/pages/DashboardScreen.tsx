import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { MenuSidebar } from '../components/MenuSidebar';
import { UserInfoBar } from '../components/UserInfoBar';
import { makeStyles } from '@mui/styles';
import { LogoutButton } from '../components/LogoutButton';
import {Outlet} from 'react-router-dom'

const useStyles = makeStyles({
  sidebarInfo: {
    padding: '20px 0px',
    borderRight: '1px solid rgba(145, 158, 171, 0.24)'
  },
  flexMenu: {
    display: 'flex',
    flexDirection: 'column',
  },
  fillSpace: {
    flexGrow: 1
  },
  LogoutButton: {
    margin: '0px 25px'
  }
});

export const DashboardScreen = () => {

  const classes = useStyles();

  return(
      <Grid container>
        <Grid className={classes.sidebarInfo} item xs={2}> 
        <Box className={classes.flexMenu}>
          <Box>
            <UserInfoBar /> 
          </Box>
          <Box>
            <MenuSidebar /> 
          </Box>
          <Box className={classes.fillSpace}></Box>
          <Box className={classes.LogoutButton}>
            <LogoutButton /> 
          </Box>
        </Box>
        </Grid>
        <Grid item xs={10}>
          <Outlet />
        </Grid>
      </Grid>
  );
};
