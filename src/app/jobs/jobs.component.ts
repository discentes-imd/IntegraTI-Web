import { Component, OnInit } from '@angular/core';

import{JobService} from '../_services/job.service';
import {Job} from '../_models/job';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

 listaJobs:[any];

  constructor(public JobService:JobService) { 
    this.listaJobs = JobService.jobs;
  }

  ngOnInit() {
  }

}
