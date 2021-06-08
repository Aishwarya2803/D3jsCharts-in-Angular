import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
import { ChartsService } from '../dashboard/charts.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  currentRate = 8;
  barWidth: number=0;
  barHeight: number=0;
  barMargin = { top: 20, right: 20, bottom: 30, left: 40 };
  xAxis: any;
  yAxis: any;
  barSvg: any;
  g: any;
  BarColor:any;
  constructor(public service:ChartsService) {
    this.barWidth = 900 - this.barMargin.left - this.barMargin.right;
    this.barHeight = 500 - this.barMargin.top - this.barMargin.bottom; }

  ngOnInit(): void {
    this.Svg();
    this.Axis();
    this.drawAxis();
    this.drawBars();
  }
  Svg() {
    this.barSvg = d3.select('#barChart')
      .append('svg')
      .attr('width', '40%')
      .attr('height', '100%')
      .attr('viewBox', '0 0 900 500');
    this.g = this.barSvg.append('g')
      .attr('transform', 'translate(' + this.barMargin.left + ',' + this.barMargin.top + ')');
      this.BarColor = d3Scale.scaleOrdinal()
      .range(['#cf4d48', '#c2673a', '#d4d420', '#a6c926', '#26c97d', '#2daeba', '#96263e','#962682']);
  }
  
  Axis() {  
    this.xAxis = d3Scale.scaleBand().rangeRound([0, this.barWidth]).padding(0.4);
    this.yAxis = d3Scale.scaleLinear().rangeRound([this.barHeight, 0]);
    this.xAxis.domain(this.service.BarChart.map((d) => d.Hardware));
    this.yAxis.domain([0, d3Array.max(this.service.BarChart, (d) => d.Production)]);
  }

  drawAxis() {
    this.g.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + this.barHeight + ')')
      .call(d3Axis.axisBottom(this.xAxis));
    this.g.append('g')
      .attr('class', 'axis axis--y')
      .call(d3Axis.axisLeft(this.yAxis))
      .append('text')
      .attr('class', 'axis-title')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '0.71em')
      .attr('text-anchor', 'end')
      .text('Frequency');
  }

  drawBars() {
    this.g.selectAll('.bar')
      .data(this.service.BarChart)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', (d: { Hardware: any; }) => this.xAxis(d.Hardware))
      .attr('y', (d: { Production: any; }) => this.yAxis(d.Production))
      .attr('width', this.xAxis.bandwidth())
     .attr('fill',   (d: any) => this.BarColor(d.Hardware))
      .attr('height', (d: { Production: any; }) => this.barHeight - this.yAxis(d.Production));
      
  }
}
