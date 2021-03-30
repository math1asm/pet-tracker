import { createReducer } from 'reduxsauce';
import produce from 'immer';

import { LISTA_USUARIOS, DROP_USUARIOS_CARGADOS } from '../actions/counter';

const INITIAL_STATE = {
  random: [],
  datosApi: [],
  api: []
};

const listaUsuarios = produce((draft, { index }) => {
  draft.datosApi.push(index);
  console.log('iiiii: ', draft.datosApi);
  console.log('antes: ', index);

  console.log('i.id: ', index.login);

  console.log('apipipipip: ', draft.api);
});
const dropUsuariosCargados = produce((draft, { index }) => {
  console.log('index todo', index);
  const { datosApi, login } = index;

  console.log('datosAPI todo', datosApi);
  console.log('login ', login);
  draft.datosApi.splice(login, 1);
  // console.log('hoy.id: ', index.login.uuid);
});

const reducer = createReducer(INITIAL_STATE, {
  [LISTA_USUARIOS]: listaUsuarios,
  [DROP_USUARIOS_CARGADOS]: dropUsuariosCargados
});

export default reducer;
