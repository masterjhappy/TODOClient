import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../features/todo-list/todo';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private http = inject(HttpClient);
  private _url = environment.baseUrl;

  todos = signal<Todo[]>([]);

  loadTodoList() {
    this.http.get<Todo[]>(this._url).subscribe((arr) => this.todos.set(arr));
  }

  addTodo(item: Partial<Todo>) {
    this.http.post<Todo>(this._url, item).subscribe(() => this.loadTodoList());
  }

  updateTodo(item: Todo) {
    this.http.put<Todo>(`${this._url}/${item.id}`, item).subscribe(() => this.loadTodoList());
  }

  deleteTodo(id: number) {
    this.http.delete<Todo>(`${this._url}/${id}`).subscribe(() => this.loadTodoList());
  }
}
