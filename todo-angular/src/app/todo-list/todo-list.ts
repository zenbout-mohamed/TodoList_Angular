import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-list.html', 
  styleUrl: './todo-list.css',
})
export class TodoList {
  tasks: string[] = [];
  newTask = '';

  addTask(){
    if (!this.newTask.trim()) return; 
    
    this.tasks.push(this.newTask.trim());
    this.newTask = '';
  }

  deleteTask(index:number){
    this.tasks.splice(index , 1);
  }

}

 
