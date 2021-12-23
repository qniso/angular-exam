import { Component, Injectable, Input, OnInit, OnChanges } from '@angular/core';

import { Priority } from '../../interfaces/priority.interface';
import { TODOLISTS } from '../../mocks/mock-todos';
import { TodoList } from '../../mocks/todos';

@Component({
  selector: 'app-modal-change-card',
  templateUrl: './modal-change-card.component.html',
  styleUrls: ['./modal-change-card.component.scss']
})


export class ModalChangeCardComponent implements OnInit {

  ToDoList = TODOLISTS;

  @Input() todocard!: TodoList;
  
  @Input() priority: Priority[] = [
    {priority: 'High'},
    {priority: 'Medium'},
    {priority: 'Low'}
  ]
  constructor(

  ) { }
  
  

  ngOnInit(): void {

    // console.log(this.ToDoList);
    
  }


}
