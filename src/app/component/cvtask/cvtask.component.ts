import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cvtask',
  templateUrl: './cvtask.component.html',
  styleUrls: ['./cvtask.component.css']
})
export class CvtaskComponent implements OnInit{

  constructor(public cvroute:Router){}
  ngOnInit(): void {}

}
