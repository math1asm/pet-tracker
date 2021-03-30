import React, { useCallback } from 'react';
import { Button, Container, Grid, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

import { ABOUT, COUNTER } from '../routes/paths';

import useStyles from './styles';

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleNavigate = useCallback(path => () => dispatch(push(path)), [
    dispatch
  ]);

  return (
    <div>
      <Container className={classes.container} maxWidth={false}>
        <Grid className={classes.grid}>
          <Paper className={classes.paper}>
            <Button
              className={classes.button}
              color='primary'
              variant='contained'
              onClick={handleNavigate(ABOUT)}
            >
              RANDOM USERS
            </Button>
            <Button
              className={classes.button}
              color='secondary'
              variant='contained'
              onClick={handleNavigate(COUNTER)}
            >
              USERS
            </Button>
          </Paper>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
