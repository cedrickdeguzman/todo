import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ToDo } from '../model/todo.model';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  todoForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddTodoComponent>
  ) { }

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      title: new FormControl(''),
      image: new FormControl(''),
      note: new FormControl('')
    })
  }

  submit() {
    if (this.todoForm.valid) {
      const value = this.todoForm.value;
      const newToDo = new ToDo(value); 
      this.dialogRef.close(newToDo);
    }
  }

}
