import { Component, Inject } from '@angular/core';

import { Job } from './../../_models/job';
import { JobService } from './../../_services/job.service';

@Component({
  selector: 'app-jobs-form',
  templateUrl: './jobs-form.component.html',
  styleUrls: ['./jobs-form.component.css']
})
export class JobsFormComponent {

  job:Job = new Job();
  loading=false;

  constructor(public jobService: JobService) { }
  cadastrar(){
    this.loading = true;
   // this.jobService.create(this.job)
    this.jobService.jobs.push(this.job);
    console.log(this.jobService.jobs);
  }

}
