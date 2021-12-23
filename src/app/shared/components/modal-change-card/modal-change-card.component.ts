import { Component, Injectable, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';


@Injectable()
export class ChangeCardModalDialog {
  

  constructor(private dialog: MatDialog) {}

  openDialog(): Observable<any> {
    const dialogRef = this.dialog.open(ModalChangeCardComponent, {
      disableClose: true,
      hasBackdrop: true,
      minHeight: 'px',
      width: '700px',
    });

    return dialogRef.afterClosed();
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}

@Component({
  selector: 'app-modal-change-card',
  templateUrl: './modal-change-card.component.html',
  styleUrls: ['./modal-change-card.component.scss']
})


export class ModalChangeCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
