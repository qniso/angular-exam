import { Component, Input, OnInit } from '@angular/core';


import { TODOLISTS } from '../../shared/mocks/mock-todos';
import { ChangeCardModalDialog } from '../../shared/components/modal-change-card/modal-change-card.component';
import {UserCardModalDialog} from '../../shared/components/modal-create-card/modal-create-card.component';

import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  ToDoList = TODOLISTS;

  constructor(
    public changeCardModalDialog: ChangeCardModalDialog,
    public userCardModalDialog : UserCardModalDialog,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.openAddDialog()
  }

  openAddDialog(){
    const dialogOpen = this.userCardModalDialog.openDialog().subscribe()
  }
  changeCard(){

    console.log('+');
    const dialogOpen = this.changeCardModalDialog.openDialog().subscribe()
    
    
  }
}
