import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Task } from 'src/app/model/cvtask';
import * as moment from 'moment';
import { CvtaskService } from 'src/app/service/cvtask.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-cvtask-view',
  templateUrl: './cvtask-view.component.html',
  styleUrls: ['./cvtask-view.component.css']
})
export class CvtaskViewComponent implements OnInit {
  cvform:FormGroup= new FormGroup({});
  cvtask:Task= new Task();
  id:number=0;
  cvstate:boolean=false;

  constructor(
    private cvtaskService:CvtaskService,
    private cvroute:ActivatedRoute
  ){

  }
  ngOnInit(): void {
      this.cvroute.params.subscribe((data:Params)=>{
        this.id=data['id'];
        this.cvstate=data['id']!=null;
        this.init();
      });
      this.cvform=new FormGroup({
        id:new FormControl(),
        cvtext:new FormControl(),
        cvdate:new FormControl(),
        cvtime:new FormControl(),
        cvreminder:new FormControl()
      })
  }
  init() {
    if (this.cvstate) {
      this.cvtaskService.listId(this.id).subscribe((cvdata) => {
        this.cvform = new FormGroup({
          id: new FormControl(cvdata.id),
          cvtext: new FormControl(cvdata.cvtext),
          cvdate: new FormControl(cvdata.cvdate),
          cvtime: new FormControl(cvdata.cvtime),
          cvreminder: new FormControl(cvdata.cvreminder),
        });
      });
    }
  }

}
