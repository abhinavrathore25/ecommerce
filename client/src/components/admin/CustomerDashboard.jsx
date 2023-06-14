import * as React from 'react';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@material-ui/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({

  grid1: {
    color: 'antiquewhite',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '59px',
    textAlign: 'center',
    backgroundColor: '#8675c1'
  },

  grid2: {
    height: '59px',
    textAlign: 'center'
  },

  grid3: {
    height: '500px',
    textAlign: 'center',
    backgroundColor: '#dbd9e1 !important'
  },

  SignInButton: {
    color: 'antiquewhite !important',
    textAlign: 'center',
    backgroundColor: 'none !important',
    paddingLeft: '24px !important'
  },

});

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: 'red',
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 2 }}>
      <Grid>
        <Grid item xs={12}>
          <Item>
            <div className={classes.grid1}>
              Welcome To The App
              <Link to='/customerLogin'>
                <Button className={classes.SignInButton} href="">Sign In</Button>
              </Link>

              <Link to='customerSignup'>
                <Button className={classes.SignInButton} href="">Sing UP</Button>
              </Link>

            </div>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item className={classes.grid2}>
          
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item className={classes.grid3}>
            <Outlet />
          </Item>
        </Grid>
      </Grid>
    </Box>
  )
}