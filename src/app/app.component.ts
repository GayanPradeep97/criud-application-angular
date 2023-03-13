import { Component, OnInit,ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { ApiService} from './services/api.service'
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'routin-task';
  displayedColumns: string[] = ['productname', 'category','date','freshness', 'price', 'comment','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

constructor(private dialog: MatDialog, private api: ApiService){

}

  ngOnInit(): void{
    this.getAllProducts();
    
  }
  openDialog( ) {
    this.dialog.open(DialogComponent, {
      
    });
    
  }

  getAllProducts(){
    return this.api.getProduct().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort 
      },
      error:() => {
        alert("error")
      }
    })
  } 

  editData(row : any){
    this.dialog.open(DialogComponent),{
      width : '30%',
      data : row
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
