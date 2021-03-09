import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {ErrorComponent} from "./components/error/error.component";
import {BasicLineChartComponent} from "./components/basic-line-chart/basic-line-chart.component";
import {RxjsComponent} from "./components/rxjs/rxjs.component";
import {RxjsAjaxComponent} from "./components/rxjs-ajax/rxjs-ajax.component";
import {FullScreenComponent} from "./components/full-screen/full-screen.component";
import {DecoratorComponent} from "./components/decorator/decorator.component";
import {DomAngularComponent} from "./components/dom-angular/dom-angular.component";

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
    path: 'ngrxCount', loadChildren: () => import('./modules/ngrx-counter/ngrx-counter.module')
      .then(m => m.NgrxCounterModule)
      .catch(err => alert(err))
  },
  {
    path: 'decorators', component: DecoratorComponent
  },
  {
    path: 'domAngular', component: DomAngularComponent
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
export class AppRoutingModule {
}
