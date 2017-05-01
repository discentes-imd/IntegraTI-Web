import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsComponent } from './jobs.component';
import { JobsFormComponent } from './jobs-form/jobs-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [JobsComponent, JobsFormComponent]
})
export class JobsModule { }
