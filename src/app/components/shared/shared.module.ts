import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonArrowComponent } from './button-arrow/button-arrow.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { WebmComponent } from './webm/webm.component';
import { SistemsComponent } from './sistems/sistems.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScrumComponent } from './scrum/scrum.component';


@NgModule({
  declarations: [ButtonArrowComponent, ProfilesComponent, WebmComponent, SistemsComponent, ScrumComponent],
  exports: [ButtonArrowComponent, ProfilesComponent, WebmComponent, SistemsComponent, ScrumComponent],
  imports: [CommonModule, NgbModule]
})
export class SharedModule { }
