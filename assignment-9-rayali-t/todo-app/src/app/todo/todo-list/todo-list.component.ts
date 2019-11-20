import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";

import {Item} from "../todo.model";
import {ItemsService} from "../todo.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit,OnDestroy {
/*items =[{title:"shoppping", description:"grocery",dueDate:"19/11/2019",time:"9"},
  {title:"bill payments", description:"gas",dueDate:"19/11/2019",time:"9"},
  {title:"expense list", description:"money spent on",dueDate:"19/11/2019",time:"9"}];
  */
//@Input() items: Item[] =[];
  items: Item[] = [];
  private itemSub: Subscription;
itemsService:ItemsService;
//dependency injection
constructor(itemsService: ItemsService) {
  this.itemsService=itemsService;
}

  ngOnInit() {
  /*this.items=this.itemsService.getItems();
  this.itemSub=this.itemsService.getItemUpdatedListener().
  subscribe((items: Item[])=>{
    this.items=items;
  });*/
    this.itemsService.list().subscribe((items: Item[]) => {
      this.items = items;
      console.log("We got",items);
    });
  }

  ngOnDestroy() {
  this.itemSub.unsubscribe();
  }

}
