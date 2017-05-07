import { Component, OnInit } from '@angular/core';

import { JobService } from '../_services/job.service';
import { Job } from '../_models/job.model';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  listaJobs: any[];

  constructor(private _jobService: JobService) {
    this.listaJobs = _jobService.jobs;
  }

  ngOnInit() {
  }

}
