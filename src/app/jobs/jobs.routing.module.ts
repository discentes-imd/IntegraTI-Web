import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobsComponent } from './jobs.component';
import { JobsFormComponent } from './jobs-form/jobs-form.component';

export const jobsRoutes: Routes = [
    { path: 'jobs', component: JobsComponent },
    { path: 'jobs/novo', component: JobsFormComponent },
];

@NgModule({
    imports: [RouterModule.forChild(jobsRoutes)],
    exports: [RouterModule]
})
export class JobsRoutingModule { }
