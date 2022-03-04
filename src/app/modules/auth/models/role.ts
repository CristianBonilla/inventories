export enum Role {
  ADMIN = 'administrador',
  COMMON = 'general'
}

export interface RoleResponse {
  id: number;
  type: Role;
  date: Date;
}
