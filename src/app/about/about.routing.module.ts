import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';

export const AboutRoutes: Routes = [
    { path: 'about', component: AboutComponent }
];

@NgModule({
    imports: [RouterModule.forChild(AboutRoutes)],
    exports: [RouterModule]
})
export class AboutRoutingModule { }
