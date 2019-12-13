import { Injectable } from '@angular/core';
import { ToDo } from './model/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  toDoData() {
    const notes: ToDo[] = [
      {
        title: 'cook',
        note: 'buttered shrimp'
      },
      {
        title: 'inom',
        note: 'everyday'
      }
    ];
    return notes;
  }
}
