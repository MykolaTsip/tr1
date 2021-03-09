import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgrxCounterRoutingModule } from './ngrx-counter-routing.module';
import { CounterComponent } from './components/counter/counter.component';


@NgModule({
  declarations: [CounterComponent],
  imports: [
    CommonModule,
    NgrxCounterRoutingModule
  ],

  providers: []
})
export class NgrxCounterModule { }
