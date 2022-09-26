import { User } from './models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, map, filter, Subject, ReplaySubject, BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  subject = new Subject();
  replay = new ReplaySubject(10);
  behavior = new BehaviorSubject("Jerome");
  
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.url}/user`).pipe<User[]>(
      map((data: User[]) => {
        for(let a of data) {
          a.active = true
        }
        return data
      }
      )
    )
  }

  create(user:User) {
    return this.http.post(`${environment.url}/user`, user).subscribe()
  }

  update(user:User) {
    return this.http.put(`${environment.url}/user/${user.id}`, user).subscribe()
  }

  delete(id:number) {
    return this.http.delete(`${environment.url}/user/${id}`).subscribe()
  }


}
