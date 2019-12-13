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
        note: 'buttered shrimp',
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Shrimp_and_corn_chowder.jpg'
      },
      {
        title: 'inom',
        note: 'everyday',
        image: 'https://i.ytimg.com/vi/V7NJArkdyw0/hqdefault.jpg'
      }
    ];
    return notes;
  }
}
