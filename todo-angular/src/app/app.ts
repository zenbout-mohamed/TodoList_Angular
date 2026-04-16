import { Component } from '@angular/core';
import { TodoComponent } from './todo-list/todo-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoComponent],
  template: `<app-todo />`,
})
export class AppComponent {}