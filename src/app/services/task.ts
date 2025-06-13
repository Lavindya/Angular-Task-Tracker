import { Injectable } from '@angular/core';  //importing Angular's core module
import { Task } from '../models/task.model'; //importing the Task model defined earlier

@Injectable({         //one instance is shared across the app.  
  providedIn: 'root'  // No need to manually add it to a module’s providers array.
})
export class TaskService {
  private tasks: Task[] = [];  //private array that stores all the tasks in memory.
  private idCounter = 1;       //number that auto-increments to give each task a unique ID.

  getTasks(): Task[] {      //Returns the current list of tasks.
    return this.tasks;
  }

  addTask(title: string): void {         //Accepts a task title from the user.
    this.tasks.push({ id: this.idCounter++, title, completed: false });
  }

  toggleTask(id: number): void {         //Finds the task by its ID.
    const task = this.tasks.find(t => t.id === id);
    if (task) task.completed = !task.completed;
  }

  deleteTask(id: number): void {         //Removes the task with the given ID.
    this.tasks = this.tasks.filter(t => t.id !== id);
  }
}
