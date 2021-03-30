import { create } from 'apisauce';

const config = {
  baseURL: 'https://randomuser.me/'
};

const createApi = () => {
  const { get } = create(config);

  const getUsers = () =>
    get('api/?format=pretty&results=50&inc=name,email,login,picture&noinfo');

  return {
    getUsers
  };
};

export default createApi;
