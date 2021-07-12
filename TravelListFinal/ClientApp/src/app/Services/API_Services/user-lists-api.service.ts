import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserListsApiService {
  constructor(private http: HttpClient) {}

  addUserList(uname, ultitle) {
    this.http.post<any>(`/userlist/add?username=${uname}&userlisttitle=${ultitle}`, {}).subscribe(results => {
      console.log(results);
    })
  }

  removeUserList(ulid) {
    this.http.delete<any>(`userlist/remove/${ulid}`).subscribe(results => {
      console.log(results);
    })
  }

  getAllUserLists(cb) {
    this.http.get<any>('/userlist').subscribe(lists => {
      cb(lists);
    });
  }

  getOneUserList(ulid, callback) {
    this.http.get<any>(`/uslerlist/${ulid}`).subscribe(callback);
  }

  editUserList(UserList) {
    this.http.put<any>('/userlist', {}).subscribe(results => {
      console.log(results);
    })
  }
}
