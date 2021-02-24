import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {ErrorComponent} from "./components/error/error.component";
import {BasicLineChartComponent} from "./components/basic-line-chart/basic-line-chart.component";
import {RxjsComponent} from "./components/rxjs/rxjs.component";

const routes = [
  // {
  //   path: ''
  // },
  {
    path: 'echart', component: BasicLineChartComponent
  },
  {
    path: 'rxjs', component: RxjsComponent
  },
  {
    path: '**', redirectTo: 'error', pathMatch: 'full'
  },
  {
    path: 'error', component: ErrorComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
