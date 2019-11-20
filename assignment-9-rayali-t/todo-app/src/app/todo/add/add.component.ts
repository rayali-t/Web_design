import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import { Item} from "../todo.model";
import { NgForm } from "@angular/forms"
import {ItemsService} from "../todo.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
newItem='New Item 1';
enteredValue='';
enteredTitle ='';
enteredDescription='';
enteredDate='';
enteredTime='';
//@Output() itemCreated = new EventEmitter<Item>();//data emitted of type Item

  //public omits the writing of this.attribute = attribute
  //constructor(public itemService:ItemsService) { }
  itemsService:ItemsService;
//dependency injection
  constructor(itemsService: ItemsService) {
    this.itemsService=itemsService;
  }

  ngOnInit() {
  }
//method trigger on click of add Todo item
  onAddPost(form: NgForm){

    //wont allow to enter empty row
   // if(form.invalid){
     // return;
   // }

    alert("Post added");

    //this.newItem=this.enteredValue;
    const item :Item={
      /*title: this.enteredTitle,
      description: this.enteredDescription,
      dueDate: this.enteredDate,
      time: this.enteredTime*/

      title: form.value.title,
      description: form.value.description,
      dueDate: form.value.dueDate,
      time: form.value.time

    };
    //this.itemCreated.emit(item);
    this.itemsService.addItem(form.value.title,form.value.description,form.value.dueDate,form.value.time);
    //const item: Item ={title:form.value.title, description:form.value.description, dueDate: form.value.dueDate,
    // time: form.value.time};

    form.resetForm();
  }
}
