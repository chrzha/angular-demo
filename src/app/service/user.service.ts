import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs/Observable';
 

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class UserService {
 
  private usersUrl: string;
 
  constructor(private http: HttpClient) {
    this.usersUrl = 'http://127.0.0.1:8762/users';
  }
 
  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }
 
  public save(user: User) {
    console.log(user);
    return this.http.post<User>(this.usersUrl, user);
  }

  public delete(id: string): Observable<{}> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.delete(url, httpOptions);
  }
}