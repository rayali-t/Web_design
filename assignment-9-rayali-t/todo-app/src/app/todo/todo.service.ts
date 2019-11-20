import {Item} from "./todo.model";
import {Injectable} from "@angular/core";
import {Observable, Subject} from 'rxjs';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class ItemsService{
  private items: Item[]=[];
private itemsUpdated = new Subject<Item[]>();

  constructor(private http:HttpClient) {

  }

  public list(): Observable<Array<Item>> {
    const todoItems$ = this.http.get<Item[]>('http://localhost:3001/todo/');//api/todo
    return todoItems$;
  }

public addTodo(item : Item){
    var headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    console.log("in add todo"+ JSON.stringify(item));
    return this.http.post<Item>('http://localhost:3001/todo/',JSON.stringify(item));
    //  .map(res=>res.json);
}


  getItems(){
    //return [this.items];
    return [...this.items];//helps keeps items array immutable, not editing directly items array ... creates a copy
    // of items array and returns it
  }

  getItemUpdatedListener(){
  return this.itemsUpdated.asObservable();
  }

  addItem(title:string, description:string, dueDate: string, time: string){
  const item: Item ={title:title, description:description, dueDate: dueDate, time: time};
   // const item = {title:title};
    console.log("Helooooooo : "+item.title);

   // this.http.post('http://localhost:3001/todo/',item);
    this.addTodo(item)
      .subscribe(item=> {this.items.push(item);
      });

  //this.items.push(item);
  //this.itemsUpdated.next([...this.items])

  }

  deleteItem(id:number ){

  }
}
