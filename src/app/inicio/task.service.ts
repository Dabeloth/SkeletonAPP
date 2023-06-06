import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: Task[] = []; // Array para almacenar las tareas

  constructor() {}

  createTask(task: Task) {
    this.tasks.push(task);
  }

  getTasks() {
    return this.tasks;
  }
}

export interface Task {
  title: string;
  startTime: Date;
  endTime: Date;
}