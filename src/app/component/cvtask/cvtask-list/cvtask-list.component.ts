import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Task } from 'src/app/model/cvtask';
import { CvtaskService } from 'src/app/service/cvtask.service';
import { MatDialog } from '@angular/material/dialog';
import { CvtaskDialogComponent } from './cvtask-dialog/cvtask-dialog.component';

@Component({
  selector: 'app-cvtask-list',
  templateUrl: './cvtask-list.component.html',
  styleUrls: ['./cvtask-list.component.css']
})
export class CvtaskListComponent implements OnInit {

  cvdataSource:MatTableDataSource<Task>= new MatTableDataSource<Task>();
  cvidMayor: number = 0;
  cvdisplayedColumns: string[] = ['id', 'cvtext', 'Acciones1', 'Acciones2'];
  @ViewChild(MatPaginator,{ static:true }) cvpaginator!: MatPaginator;

  constructor(private cvcS:CvtaskService, private cvdialog: MatDialog) { }

  ngOnInit(): void {
    this.cvcS.list().subscribe(cvdata=>{
      this.cvdataSource= new MatTableDataSource(cvdata);
        this.cvdataSource.paginator = this.cvpaginator;
    })
    this.cvcS.getList().subscribe(cvdata => {
      this.cvdataSource = new MatTableDataSource(cvdata);
      this.cvdataSource.paginator = this.cvpaginator; // Asignar paginator de nuevo
    })
    this.cvcS.getConfirmDelete().subscribe(cvdata => {
      cvdata == true ? this.eliminar(this.cvidMayor) : false;
    })
  }

  confirm(cvid: number) {
    this.cvidMayor = cvid;
    this.cvdialog.open(CvtaskDialogComponent);
  }
  eliminar(cvid: number) {
    this.cvcS.delete(cvid).subscribe(() => {
      this.cvcS.list().subscribe(data => {
        this.cvcS.setList(data);
      })
    })
  }
  filter(cve: any) {
    this.cvdataSource.filter = cve.target.value.trim();
  }

}
