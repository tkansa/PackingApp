import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ItemListsApiService {
  constructor(private http: HttpClient) { }

  addItemToList(item, itcat, ulid) {
    this.http.post<any>(`/itemlist/add?itemname=${item}&itemcategory=${itcat}&userlistsId=${ulid}`, {}).subscribe(results => {
      console.log(results);
    })
  }

  removeItemFromList(ulid) {
    this.http.delete<any>(`itemlist/remove/${ulid}`).subscribe(results => {
      console.log(results);
    })
  }

  getAllItemsFromList(cb) {
    this.http.get<any>('/itemlist').subscribe(lists => {
      cb(lists);
    });
  }

  getOneItemFromList(ulid, callback) {
    this.http.get<any>(`/itemlist/${ulid}`).subscribe(callback);
  }

  editItem(ItemList) {
    this.http.put<any>('/itemlist', {}).subscribe(results => {
      console.log(results);
    })
  }
}



