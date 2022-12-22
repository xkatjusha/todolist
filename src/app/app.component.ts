import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

todos = [
  {todo:"einkaufen", done: false},
  {todo:"kochen", done: false},
  {todo:"lesen", done: true},
  {todo:"tranieren", done: false}
]

  title = 'todolist';
}
