import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { JobsComponent } from './jobs.component';
import { JobsFormComponent } from './jobs-form/jobs-form.component';

// Módules
import { JobsRoutingModule } from './jobs.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    JobsRoutingModule
  ],
  declarations: [JobsComponent, JobsFormComponent]
})
export class JobsModule { }
