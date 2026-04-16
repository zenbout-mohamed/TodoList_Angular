import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Task {
  id: number;
  title: string;
  author: string;
  completed: boolean;
  tags: string[];
}

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css'
})
export class TodoListComponent {

  tasks: Task[] = [];
  nextId = 1;

  title = '';
  author = '';
  tags = '';

  addTask() {
    if (!this.title.trim() || !this.author.trim()) return;

    this.tasks.push({
      id: this.nextId++,
      title: this.title.trim(),
      author: this.author.trim(),
      completed: false,
      tags: this.tags
        ? this.tags.split(',').map(t => t.trim())
        : []
    });

    this.title = '';
    this.author = '';
    this.tags = '';
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }

  toggleTask(task: Task) {
    task.completed = !task.completed;
  }
}