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
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { DecoratorsComponent } from './components/decorators/decorators.component';
import { DomAngularComponent } from './components/dom-angular/dom-angular.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    BasicLineChartComponent,
    RxjsComponent,
    RxjsAjaxComponent,
    FullScreenComponent,
    DecoratorComponent,
    DecoratorsComponent,
    DomAngularComponent
  ],
  imports: [
    BrowserModule,
    NgxEchartsModule.forRoot({ echarts }),
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AppEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
