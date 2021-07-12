import { Component, OnInit, Input } from '@angular/core';
import { ItemListsApiService } from '../Services/API_Services/item-lists-api.service';

@Component({
  selector: 'app-current-list',
  templateUrl: './current-list.component.html',
  styleUrls: ['./current-list.component.css']
})

export class CurrentListComponent implements OnInit {

  @Input() currentListId: number;
  list = null;

  constructor(private ItemListsApiService: ItemListsApiService ) { 
    this.ItemListsApiService.getAllItemsFromList(list => {
      console.log(list);
      this.list = list;
    })
  /*console.log(this.list);*/
  }

  addNewItem(value: string, value2: string) {
    this.ItemListsApiService.addItemToList(value, value2, this.currentListId)
/*    console.log(value);*/
    }

  ngOnInit() {
  }

}
