import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { ToDo } from './model/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'todo';
  toDos: ToDo[] = [];

  constructor(
    private toDoService: TodoService
  ) {}

  ngOnInit() {
    this.title = 'anchor';
    this.getData();
  }

  getData() {
    console.log(this.toDos,'awuuu');
    this.toDos = this.toDoService.toDoData();
    console.log(this.toDos);
  }
}
