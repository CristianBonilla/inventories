import { environment } from '@src/environments/environment';

const { serverUrl: API_URL } = environment.api;

const ENDPOINTS = {
  USERS: {
    ALL: `${ API_URL }/usuarios/all`,
    LOGIN: `${ API_URL }/usuarios/login`,
    CREATE: `${ API_URL }/usuarios/add`,
    UPDATE: `${ API_URL }/usuarios/update`,
    DELETE: `${ API_URL }/usuarios/delete`
  },
  ROLES: {
    ALL: `${ API_URL }/roles/all`
  },
  CATEGORIES: {
    ALL: `${ API_URL }/categorias/all`
  }
} as const;

Object.freeze(ENDPOINTS);

export { API_URL, ENDPOINTS };
