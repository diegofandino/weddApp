import { Avatar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';

const useStyles = makeStyles({
    boxInformation: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px 20px',
        borderRadius: '12px',
        backgroundColor: 'rgb(244, 246, 248)',
        margin: '0px 25px'
    },
    nameUser: {
        paddingLeft: 12,
        fontSize: 15,
        fontWeight: 'bold', 
        textTransform: 'capitalize'
    },
    avatarUser: {
        border: '1px solid #FFFFFF'
    }
});

export const UserInfoBar = () => {

    const classes = useStyles();

  return (
      <>
        <Box className={classes.boxInformation} >
            <Box> 
                <Avatar className={classes.avatarUser} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Box>
            <Box>
            <Typography className={classes.nameUser} variant="button">
                Jhon Demon
            </Typography>
            </Box>
        </Box>
      </>
  );
};
