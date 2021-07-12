import { Component, OnInit } from '@angular/core';
import { UserListsApiService } from '../Services/API_Services/user-lists-api.service';

@Component({
  selector: 'app-user-lists',
  templateUrl: './user-lists.component.html',
  styleUrls: ['./user-lists.component.css']
})
export class UserListsComponent implements OnInit {

  lists = null;
  curUser: string = "chelsea";
  currentListId: number;

  constructor(private UserListsApiService: UserListsApiService) { 
    this.UserListsApiService.getAllUserLists(lists => {
      console.log(lists);
      this.lists = lists;
    })
/*    console.log(this.lists);*/
  
  }

  findCurUser(value: string) {
    this.curUser = value;
  }

  selectList(value: number) {
    this.currentListId = value;
    console.log(this.currentListId);
  }
    

  ngOnInit() {
  }



}

