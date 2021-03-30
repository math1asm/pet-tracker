import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
  {
    listaUsuarios: ['index'],
    dropUsuariosCargados: ['index']
  },
  {
    prefix: 'COUNTER/'
  }
);

const { listaUsuarios, dropUsuariosCargados } = Creators;

const { LISTA_USUARIOS, DROP_USUARIOS_CARGADOS } = Types;

export {
  listaUsuarios,
  dropUsuariosCargados,
  LISTA_USUARIOS,
  DROP_USUARIOS_CARGADOS
};
