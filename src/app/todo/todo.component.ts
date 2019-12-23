import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number
  todo: Todo

  constructor(
    private todoService: TodoDataService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.router.snapshot.params['id'];
    this.todo = new Todo(1, '', false, new Date());
    this.todoService.retrieveTodo('Aboubacar', this.id).subscribe(
      data => this.todo = data 
    )
  }

  saveTodo(){
    console.log('save todo', )
  }

}
