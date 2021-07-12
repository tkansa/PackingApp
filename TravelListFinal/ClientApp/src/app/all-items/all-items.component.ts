import { Component } from '@angular/core';
import { CategoryApiService } from '../Services/API_Services/category-api.service';
import { ItemListsApiService } from '../Services/API_Services/item-lists-api.service';

@Component({
    selector: 'app-all-items',
    templateUrl: './all-items.component.html',
    styleUrls: ['./all-items.component.css']
})
/** all-items component*/
export class AllItemsComponent {

  listofitems = null;
  listcategories = null;

    /** all-items ctor */
    constructor(private ItemListApiService: ItemListsApiService, private CategoryApiService: CategoryApiService ) {
      this.ItemListApiService.getAllItemsFromList(items => {
        console.log(items);
        this.listofitems = items;
      });
      this.CategoryApiService.getAllCategories(cats => {
        console.log(cats);
        this.listcategories = cats;
      });
    }
}
