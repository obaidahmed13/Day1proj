import { Component } from '@angular/core';
import { TaskService } from '../tasklist.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  title = "List of tasks"
  tasks;
  constructor(srv: TaskService){
    this.tasks = srv.getTasks();
  }
    
}
