import {Component} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';

export interface Todo {
  id: number,
  name: string,
  checked: boolean,
  crossedOut: boolean
}

let TODO_DATA: Todo[] = [
  {id: 0, name: 'mock', checked: true, crossedOut: true},
  {id: 1, name: 'test', checked: false, crossedOut: false},
  {id: 2, name: 'list', checked: true, crossedOut: true}
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  names: string[] = ['mock', 'test', 'todo'];
  
  displayedColumns: string[] = ['checked', 'name'];
  dataSource = TODO_DATA;
  selection = new SelectionModel<Todo>(true, []);
  isSomeSelected: string;

  // Est-ce que le nombre d'éléments sélectionné correspond au nombre total d'élément ?
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected === numRows;
  }

  // Sélectionne toutes les lignes si elles ne sont pas déjà sélectionnées; clear la sélection sinon
  masterToggle() {
    if(this.isAllSelected()) {
        this.selection.clear();
        this.dataSource.forEach(row => row.checked = false);
    }
    else {
        this.dataSource.forEach(row => this.selection.select(row));
        this.dataSource.forEach(row => row.checked = true);
    }
  }

  stateToggle(row? : Todo) {
    const TODO_ROW: Todo = {id: row.id, name: row.name, checked: row.checked, crossedOut: row.crossedOut};

    this.selection.toggle(row);
    row.checked = !row.checked;
    TODO_DATA.slice(row.id, 1)
    TODO_DATA.push(TODO_ROW);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Todo): string {
    if (!row) {
      return `${this.isAllSelected() ? 'done' : 'undone'} all`;
    }
    console.log('status row ', row.id, ' : ', row.checked)
    return `${this.selection.isSelected(row) ? 'undone' : 'done'} row ${row.id + 1}`;
  }

  //A virer
  addTodo(input) {
    this.names.push(input.value);
  }

  addRowTodo(input) {
    let lastRowIndex = TODO_DATA.length - 1;
    console.log(lastRowIndex);
    let newId = lastRowIndex + 1;
    console.log(newId);

    console.log(input.value);
    const TODO_ROW: Todo = {id: newId, name: input.value, checked: false, crossedOut: false};
    console.log(TODO_ROW);
    TODO_DATA.push(TODO_ROW);
    console.log(TODO_DATA);
  }
}