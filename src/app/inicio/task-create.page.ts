import { Component } from '@angular/core';
import { TaskService, Task } from './task.service';

@Component({
  selector: 'app-task-create',
  templateUrl: 'task-create.page.html',
  styleUrls: ['task-create.page.scss'],
})
export class TaskCreatePage {
  task: Task = {
    title: '',
    startTime: new Date(),
    endTime: new Date(),
  };

  constructor(private taskService: TaskService) {}

  createTask() {
    this.taskService.createTask(this.task);
    this.task = {
      title: '',
      startTime: new Date(),
      endTime: new Date(),
    };
  }
}

