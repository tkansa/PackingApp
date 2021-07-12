import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoryApiService {
    constructor(private http: HttpClient) {}

  addCategory(cat) {
    this.http.post<any>(`/category/add?category=${cat}`, {}).subscribe(results => {
      console.log(results);
    })
  }

  removeCategory(catid) {
    this.http.delete<any>(`category/remove/${catid}`).subscribe(results => {
      console.log(results);
    })
  }

  getAllCategories(callback) {
    this.http.get<any>(`/category`).subscribe(callback);
  }

  getOneCategory(id, callback) {
    this.http.get<any>(`/category/${id}`).subscribe(callback);
  }

  editCategory(Category) {
    this.http.put<any>('/category', {}).subscribe(results => {
      console.log(results);
    })
  }



}
