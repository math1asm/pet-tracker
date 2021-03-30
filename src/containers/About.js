import React, { useCallback, useState } from 'react';
import {
  Button,
  Container,
  ListItemSecondaryAction,
  IconButton,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import { useDispatch } from 'react-redux';
import { goBack } from 'connected-react-router';

import { listaUsuarios } from '../actions/counter';
import useMount from '../hooks/useMount';
import jsonApi from '../services/jsonApi';

import useStyles from './styles';

const About = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [api, setUsers] = useState([]);

  const handleGoBack = useCallback(() => dispatch(goBack()), [dispatch]);
  // const { random } = useSelector(({ counter }) => counter);

  // random=
  // console.log('api: ', api);
  // console.log('random: ', random);

  useMount(async () => {
    const { data } = await jsonApi().getUsers();
    const { results } = data;

    if (Array.isArray(results)) {
      setUsers(results);
    }
  });

  const handleSave = useCallback(
    index => () => dispatch(listaUsuarios(index)),
    [dispatch]
  );

  return (
    console.log('api: ', api),
    (
      <Container className={classes.container} maxWidth={false}>
        <Button
          className={classes.button}
          variant='contained'
          onClick={handleGoBack}
        >
          Go Back
        </Button>
        <List className={classes.List}>
          {api.map(({ login, email, name, picture }) => (
            <ListItem className={classes.List} key={login.uuid}>
              <ListItem alignItems='flex-start'>
                <ListItemAvatar>
                  <Avatar src={`${picture.thumbnail}`} alt='Avatar' />
                </ListItemAvatar>
                <ListItemText
                  primary={`${name.first}${' '}${name.last}`}
                  secondary={email}
                />
                <ListItemSecondaryAction>
                  <IconButton edge='end' aria-label='save'>
                    <SaveIcon
                      color='primary'
                      onClick={handleSave({
                        login,
                        name,
                        email,
                        picture
                      })}
                    />
                  </IconButton>
                </ListItemSecondaryAction>

                <ListItem />
              </ListItem>
            </ListItem>
          ))}
        </List>
      </Container>
    )
  );
};

export default About;
