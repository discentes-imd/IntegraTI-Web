import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';

@NgModule({
    imports: [
        CommonModule
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