import { Injectable } from '@angular/core';  //importing Angular's core module
import { Task } from '../models/task.model'; //importing the Task model defined earlier

@Injectable({         //one instance is shared across the app.  
  providedIn: 'root'  // No need to manually add it to a module’s providers array.
})
export class TaskService {
  private tasks: Task[] = [];
  private idCounter = 1;

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(title: string): void {
    this.tasks.push({ id: this.idCounter++, title, completed: false });
  }

  toggleTask(id: number): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) task.completed = !task.completed;
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }
}
