import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _users: BehaviorSubject<User[]>;
  private dataStore: {
    users: User[] }
    ;
    getUserById(id: number) {
      return this.dataStore.users.find(x => x.id == id);
    }
  constructor(private http: HttpClient) {
    this.dataStore = {users: [] };
this._users = new BehaviorSubject<User[]>([]);
  }
get users(): Observable<User[]> {
return this._users.asObservable();
}
  loadAll() {
    const userUrl = 'https://angular-material-api.azurewebsites.net/users';
    return this.http.get<User[]>(userUrl)
    .subscribe(data => {
      this.dataStore.users = data;
      this._users.next(Object.assign({}, this.dataStore).users); } ,
      error => {console.log('Failed to fetch users'); } );
  }
}
