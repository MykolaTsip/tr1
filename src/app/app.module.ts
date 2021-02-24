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

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,

    BasicLineChartComponent,

    RxjsComponent
  ],
  imports: [
    BrowserModule,
    NgxEchartsModule.forRoot({ echarts }),
    HttpClientModule,

    // якогось чорта не показує вміст Апп компоненти коли я підключаю роути
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
