import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { TodoList } from '../../shared/mocks/todos';
import { TODOLISTS } from '../../shared/mocks/mock-todos';

import {UserCardModalDialog} from '../../shared/components/modal-create-card/modal-create-card.component';

import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit, OnChanges {

  ToDoList = TODOLISTS;
  
  selectedCard!: TodoList;

  constructor(
    public userCardModalDialog : UserCardModalDialog,
    public dialog: MatDialog,
  ) { }
  ngOnChanges(): void{
    console.log(this.ToDoList);
    
  }
  ngOnInit(): void {
    this.openAddDialog()
  }

  openAddDialog(){
    const dialogOpen = this.userCardModalDialog.openDialog().subscribe()
  }
  changeCard(card: TodoList){
    this.selectedCard = card;
    // const dialogOpen = this.changeCardModalDialog.openDialog().subscribe()
  }
  
}
