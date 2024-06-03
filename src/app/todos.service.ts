import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private endPointUrl = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private http: HttpClient) {}
  getTodos()
  {
    return this.http.get(this.endPointUrl);
  }
}
