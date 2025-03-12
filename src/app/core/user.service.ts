import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserList } from '../shared/api.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  url = 'https://test.worldsacross.com/api/users';

  getUsers(): Observable<UserList> {
    return this.http.get<UserList>(this.url);
  }
}
