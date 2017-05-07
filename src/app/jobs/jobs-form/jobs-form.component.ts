import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { Job } from './../../_models/job.model';
import { JobService } from './../../_services/job.service';

@Component({
  selector: 'app-jobs-form',
  templateUrl: './jobs-form.component.html',
  styleUrls: ['./jobs-form.component.css']
})
export class JobsFormComponent {

  job: Job;
  loading = false;

  constructor(private jobService: JobService, private router: Router) { }

  cancelar() {
    this.router.navigate(['/jobs']);  
  }

  cadastrar() {
    this.loading = true;
    // this.jobService.create(this.job)
    this.jobService.jobs.push(this.job);
    console.log(this.jobService.jobs);
  }
}
