import { Component } from '@angular/core';
import { TaskService, Task } from './task.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {
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
