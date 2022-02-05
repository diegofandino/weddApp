import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { MenuSidebar } from '../components/MenuSidebar';
import { UserInfoBar } from '../components/UserInfoBar';

export const DashboardScreen = () => {
  return(
      <Grid container>
        <Grid item xs={2}> 
          <Box>
            <UserInfoBar /> 
          </Box>
          <Box>
            <MenuSidebar /> 
          </Box>
        </Grid>
        <Grid item xs={10}></Grid>
      </Grid>
  );
};
