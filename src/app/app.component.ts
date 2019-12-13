import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { ToDo } from './model/todo.model';
import { MatDialog } from '@angular/material/dialog';
import { AddTodoComponent } from './add-todo/add-todo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'todo';
  toDos: ToDo[] = [];

  constructor(
    private toDoService: TodoService,
    public matDialog: MatDialog
  ) {}

  ngOnInit() {
    this.title = 'anchor';
    this.getData();
  }

  getData() {
    this.toDos = this.toDoService.toDoData();
  }

  openModal() {
    this.matDialog.open(AddTodoComponent,{
      width: '600px'
    }).afterClosed().subscribe((result) => {
      if (result) {
        this.toDos.push(result);
      }
    });
  }
}
