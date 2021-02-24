import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BasicEchartLineModel} from "../model/BasicEchartLine.model";

@Injectable({
  providedIn: 'root'
})
export class EchartService {

  constructor(private HttpClient: HttpClient) { }

  getBasicLineEchart(): Observable<BasicEchartLineModel[]> {
    return this.HttpClient.get<BasicEchartLineModel[]>(`assets/echart/basic-line-chart-data.json`);
  }
}
