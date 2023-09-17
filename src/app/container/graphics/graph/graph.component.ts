import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit, AfterViewInit {

  private chart!: Highcharts.Chart;

  public options: any = {
    chart: {
      type: 'area',
      height: 130
    },
    title: {
      text: 'Cours du NFT en éthérum'
    },
    credits: {
      enabled: false
    },
    xAxis: {
      type: 'category',
      categories: ['jan', 'fev', 'mar', 'avr', 'mai', 'juin', 'juil', 'aou', 'sep', 'oct', 'nov', 'dec'],
      tickmarkPlacement: 'on',
      title: {
        enabled: false
      },
      min: 0,
      max: 11
    },
    series: [{
      name: 'Dragon vénère',
      data: [0.51, 0.78, 1.27, 0.84, 1.44, 1.32, 1.52, 1.63, 1.22, 1.32, 1.44, 1.73],
      showInLegend: false
    }],
  };

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.chart = Highcharts.chart('container', this.options);
  }
}
