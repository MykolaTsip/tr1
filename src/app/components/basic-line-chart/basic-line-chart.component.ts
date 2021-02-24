import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {EchartService} from "../../services/echart.service";
import {EChartsOption} from "echarts";
import {BasicEchartLineModel} from "../../model/BasicEchartLine.model";

@Component({
  selector: 'app-basic-line-chart',
  templateUrl: './basic-line-chart.component.html',
  styleUrls: ['./basic-line-chart.component.css']
})
export class BasicLineChartComponent implements OnInit {

  // //// example 1 don't work
  //
  // constructor() { }
  //
  // ngOnInit(): void {
  //   let chartDom = document.getElementById('main');
  //   let myChart = echarts.init(chartDom);
  //   let option;
  //
  //   option = {
  //     xAxis: {
  //       type: 'category',
  //       data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  //     },
  //     yAxis: {
  //       type: 'value'
  //     },
  //     series: [{
  //       data: [150, 230, 224, 218, 135, 147, 260],
  //       type: 'line'
  //     }]
  //   };
  //
  //   option && myChart.setOption(option);
  // }

  subscription: Subscription;
  _chartOption: EChartsOption;

  constructor(private echartService: EchartService) {
  }

  ngOnInit(): void {
    this.subscription = this.echartService.getBasicLineEchart()
      .subscribe(value => this._initBasicLineEchart(value))
  }

  private _initBasicLineEchart(chartOption: BasicEchartLineModel[]) {
    this._chartOption = {
      tooltip: {
        show: true
      },
      background: 'transparent',
      xAxis: {
        type: 'category',
        data: chartOption.map(({name}) => ({value: name}))
      },
      yAxis: {
        type: 'value',
      },
      series: [{
        data: chartOption.map(({value}) => ({value: value})),
        type: 'line',
        color: 'red',
      }]
    }
  }
}
