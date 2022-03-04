import { Role } from '@modules/auth/models/role';

export enum AuthType {
  Register,
  Login
}

export interface UserLoginRequest {
  dni: string;
  password: string;
}

export interface UserRequest {
  firstName: string;
  lastName: string;
  dni: string;
  date: Date;
  rol: string;
  password: string;
}

export interface UserResponse {
  id: number;
  firstName: string;
  lastName: string;
  dni: string;
  date: Date;
  rol: Role;
}

export enum ErrorType {
  NoUsers = 'NoUsers',
  Failed = 'Failed'
}
