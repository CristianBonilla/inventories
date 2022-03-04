import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ENDPOINTS } from '@models/endpoints';
import { DataResponse } from '@models/common';
import { UserResponse } from '@modules/auth/models/auth';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly httpHeaderOptions = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  private readonly usersEndpointUrl = ENDPOINTS.USERS;

  constructor(private http: HttpClient) { }

  fetchUsers() {
    const users$ = this.http.get<DataResponse<UserResponse>>(this.usersEndpointUrl.ALL, {
      responseType: 'json',
      ...this.httpHeaderOptions
    });

    return users$;
  }
}
