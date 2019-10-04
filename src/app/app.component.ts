import { Component } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  names: string[] = ['mock', 'test', 'todo'];

  myForm = new FormGroup({
    name: new FormControl()
 });

  addTodo() {
    console.log(this.myForm.value);
    this.names.push(this.myForm.value);
  }
}