import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {ErrorComponent} from "./components/error/error.component";
import {BasicLineChartComponent} from "./components/basic-line-chart/basic-line-chart.component";
import {RxjsComponent} from "./components/rxjs/rxjs.component";
import {RxjsAjaxComponent} from "./components/rxjs-ajax/rxjs-ajax.component";
import {FullScreenComponent} from "./components/full-screen/full-screen.component";
import {NgrxComponent} from "./components/ngrx/ngrx.component";

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
    path: 'rxjsAjax', component: RxjsAjaxComponent
  },
  {
    path: 'fullScreen', component: FullScreenComponent
  },
  {
    path: 'ngrx', component: NgrxComponent
  },
  // {
  //   path: '**', redirectTo: 'error', pathMatch: 'full'
  // },
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
