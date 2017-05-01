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
  constructor(public JobService: JobService) { }

  onSubmit(){
    this.JobService.jobs.push(this.job);
    console.log(this.JobService.jobs);
  }

}
