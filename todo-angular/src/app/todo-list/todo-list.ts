import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Task {
  id: number;
  title: string;
  author: string;
  completed: boolean;
  tags: string[];
}

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.html',
})
export class TodoComponent {
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
        ? this.tags.split(',').map(tag => tag.trim())
        : [],
    });

    this.title = '';
    this.author = '';
    this.tags = '';
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  toggleCompleted(task: Task) {
    task.completed = !task.completed;
  }
}