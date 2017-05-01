import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  jobs: any;
  job;

  constructor() { 
    this.job = new Object();
    this.jobs = ['a', 'b', 'c', this.job];
  }

  ngOnInit() {
  }

}
