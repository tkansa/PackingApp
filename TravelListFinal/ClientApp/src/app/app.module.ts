import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';



import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CategoryApiService } from './Services/API_Services/category-api.service';
import { UserListsApiService } from './Services/API_Services/user-lists-api.service';
import { ItemListsApiService } from './Services/API_Services/item-lists-api.service';
import { UserListsComponent } from './user-lists/user-lists.component';
import { CurrentListComponent } from './current-list/current-list.component';
import { AllItemsComponent } from './all-items/all-items.component';




@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    UserListsComponent,
    CurrentListComponent,
    AllItemsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },



    ])
  ],
  providers: [CategoryApiService, UserListsApiService, ItemListsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
