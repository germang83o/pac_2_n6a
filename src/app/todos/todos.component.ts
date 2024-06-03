import { Component } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {

  todos: any[] = [];

  constructor(private todosService: TodosService)
  {
    this.populateTodos();
  }

populateTodos(): void
{
  this.todosService.getTodos().subscribe((data: Object) => {
  this.todos = data as any[];});
}

  randomMethod()
  {

  }
}
