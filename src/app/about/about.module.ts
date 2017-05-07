import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { AboutRoutingModule } from './about.routing.module';


@NgModule({
    imports: [
        CommonModule,
        AboutRoutingModule
    ],
    declarations: [
        AboutComponent,
        ProfileCardComponent
    ],
    exports: [
        AboutComponent,
        ProfileCardComponent
    ]
})
export class AboutModule { }