import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CvtaskService } from 'src/app/service/cvtask.service';

@Component({
  selector: 'app-cvtask-dialog',
  templateUrl: './cvtask-dialog.component.html',
  styleUrls: ['./cvtask-dialog.component.css']
})
export class CvtaskDialogComponent implements OnInit {
  constructor(private cvts:CvtaskService,
    private cvdialogRef:MatDialogRef<CvtaskDialogComponent>){}


  ngOnInit(): void {}
      confirm(cvstate:boolean)
      {
        this.cvts.setConfirmDelete(cvstate);
      this.cvdialogRef.close();
      }


}
