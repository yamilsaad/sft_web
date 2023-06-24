import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonArrowComponent } from './button-arrow/button-arrow.component';



@NgModule({
  declarations: [ButtonArrowComponent],
  exports: [ButtonArrowComponent],
  imports: [CommonModule]
})
export class SharedModule { }
