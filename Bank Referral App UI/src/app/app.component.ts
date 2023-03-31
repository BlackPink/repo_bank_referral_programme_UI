import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'bankreferralapp';

  displayedColumns: string[] = ['Reference', 'Created By', 'Created Time', 'Customer No.', 'Name', 'Customer Segment'];
  dataSource!: MatTableDataSource<any>;

   //@ViewChild(MatPaginator) paginator: MatPaginator;
   @ViewChild(MatSort) sort!: MatSort;  
  
  constructor(private dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogComponent, {
      width : '70%',
      height : '80%'
    });
  }
}
