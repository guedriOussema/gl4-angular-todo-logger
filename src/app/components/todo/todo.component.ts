import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  public todos: Todo[] = []
  public name: string;
  public contenu: string;

  constructor(
    private todoService: TodoService
  ) {
    this.todos = this.todoService.getTodos();
   }

   addTodo(){
     const todo = new Todo();
     todo.name = this.name;
     todo.contenu = this.contenu;
     this.todoService.addTodo(todo);
     console.log(this.todos);
   }

   deleteTodo(todo:Todo){
     this.todoService.deleteTodo(todo);
   }

  ngOnInit(): void {
  }

}
