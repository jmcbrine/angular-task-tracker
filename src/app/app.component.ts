import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: any = {};
  model = { name: '', date: '', assigned: '' };

  constructor() {
    this.tasks = [
      { name: 'Test Task #1', date: '12/01/2012', assigned: 'John Doe' },
      { name: 'Test Task #2', date: '12/02/2012', assigned: 'John Doe' },
      { name: 'Test Task #3', date: '12/03/2012', assigned: 'John Doe' },
      { name: 'Test Task #4', date: '12/04/2012', assigned: 'John Doe' },
      { name: 'Test Task #5', date: '12/05/2012', assigned: 'John Doe' },
      { name: 'Test Task #6', date: '12/06/2012', assigned: 'John Doe' },
      { name: 'Test Task #7', date: '12/07/2012', assigned: 'John Doe' }
    ];
  }

  onSubmit() {
    console.log(this.model);
    this.tasks.push(this.model);
    console.log(this.tasks);
  }

  remove(task) {
    console.log(this.tasks.findIndex(t => t.name === task.name));
    this.tasks.splice(this.tasks.findIndex(t => t.name === task.name), 1);
  }
}
