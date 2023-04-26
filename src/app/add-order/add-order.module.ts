import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddOrderComponent } from './add-order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiInputModule } from '@taiga-ui/kit';
import {
  TuiButtonModule,
  TuiDataListModule,
  TuiDropdownModule,
} from '@taiga-ui/core';

@NgModule({
  declarations: [AddOrderComponent],
  exports: [AddOrderComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiDropdownModule,
    TuiButtonModule,
    TuiDataListModule,
  ],
})
export class AddOrderModule {}
