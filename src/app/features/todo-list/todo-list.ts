import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo-service';
import { Todo } from './todo';

@Component({
  selector: 'app-todo-list',
  imports: [FormsModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList implements OnInit {
  todoSvc = inject(TodoService);
  activeTodo = signal<Partial<Todo>>({ name: '', description: '', isDone: false });

  ngOnInit(): void {
    this.todoSvc.loadTodoList();
  }

  save() {
    const _todo = this.activeTodo();
    if (_todo.id) {
      this.todoSvc.updateTodo(_todo as Todo);
    } else {
      this.todoSvc.addTodo(_todo);
    }
    this.resetActiveTodo();
  }

  edit(item: Todo) {
    this.activeTodo.set({ ...item });
  }

  deleteItem(id: number) {
    this.todoSvc.deleteTodo(id);
    this.resetActiveTodo();
  }

  toggleTodoCheckbox(item: Todo) {
    this.todoSvc.updateTodo({ ...item, isDone: !item.isDone });
    this.resetActiveTodo();
  }

  resetActiveTodo() {
    this.activeTodo.set({ name: '', description: '', isDone: false });
  }
}
