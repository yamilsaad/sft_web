import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonArrowComponent } from './button-arrow/button-arrow.component';
import { ProfilesComponent } from './profiles/profiles.component';



@NgModule({
  declarations: [ButtonArrowComponent, ProfilesComponent],
  exports: [ButtonArrowComponent, ProfilesComponent],
  imports: [CommonModule]
})
export class SharedModule { }
