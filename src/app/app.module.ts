import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NgxEchartsModule} from "ngx-echarts";

import {AppRoutingModule} from "./app-routing.module";

import {ErrorComponent} from './components/error/error.component';
import { BasicLineChartComponent } from './components/basic-line-chart/basic-line-chart.component';
import {HttpClientModule} from "@angular/common/http";
import * as echarts from 'echarts';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { RxjsAjaxComponent } from './components/rxjs-ajax/rxjs-ajax.component';
import { FullScreenComponent } from './components/full-screen/full-screen.component';
import { DecoratorComponent } from './components/decorator/decorator.component';
import { NgrxComponent } from './components/ngrx/ngrx.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    BasicLineChartComponent,
    RxjsComponent,
    RxjsAjaxComponent,
    FullScreenComponent,
    DecoratorComponent,
    NgrxComponent
  ],
  imports: [
    BrowserModule,
    NgxEchartsModule.forRoot({ echarts }),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
