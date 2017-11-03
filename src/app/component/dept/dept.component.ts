import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dept',
  templateUrl: './dept.component.html',
  styleUrls: ['./dept.component.css']
})
export class DeptComponent implements OnInit {
  id: number;
  deptName: string;
  descript: string;


  constructor() { }

  ngOnInit() {
  this.id = 1;
  this.deptName = '123';
  this.descript = '地址';
  }

}
