import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import { ChartsService } from '../dashboard/charts.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  margin = {top: 20, right: 20, bottom: 30, left: 50};
  pieWidth: number=0;
  pieHeight: number=0;
  pieradius: number=0;

  arc: any;
  labelArc: any;
  labelPer: any;
  pie: any;
  color: any;
  pieSvg: any;
  constructor(public service:ChartsService) {
    this.pieWidth = 900 - this.margin.left - this.margin.right ;
    this.pieHeight = 500 - this.margin.top - this.margin.bottom;
    this.pieradius = Math.min(this.pieWidth, this.pieHeight) / 2;
   }

  ngOnInit(): void {
    this.Svg();
    this.drawPie();
  }
  Svg() {
    this.color = d3Scale.scaleOrdinal()
        .range(['#cf4d48', '#c2673a', '#d4d420', '#a6c926', '#26c97d', '#2daeba', '#96263e','#962682']);
    this.arc = d3Shape.arc()
        .outerRadius(this.pieradius - 10)
        .innerRadius(100);
    this.labelArc = d3Shape.arc()
        .outerRadius(this.pieradius - 40)
        .innerRadius(this.pieradius - 40);

    this.labelPer = d3Shape.arc()
        .outerRadius(this.pieradius - 80)
        .innerRadius(this.pieradius - 80);

    this.pie = d3Shape.pie()
        .sort(null)
        .value((d: any) => d.SalesPercentage);

    this.pieSvg = d3.select('#pieChart')
        .append('svg')
        .attr('width', '35%')
        .attr('height', '100%')
        .attr('viewBox', '0 0 ' + Math.min(this.pieWidth, this.pieHeight) + ' ' + Math.min(this.pieWidth, this.pieHeight))
        .append('g')
        .attr('transform', 'translate(' + Math.min(this.pieWidth, this.pieHeight) / 2 + ',' + Math.min(this.pieWidth, this.pieHeight) / 2 + ')');
  }
  drawPie() {
    const g = this.pieSvg.selectAll('.arc')
        .data(this.pie(this.service.PieChart))
        .enter().append('g')
        .attr('class', 'arc');
    g.append('path').attr('d', this.arc)
        .style('fill', (d: any) => this.color(d.data.Hardware) );
    g.append('text').attr('transform', (d: any) => 'translate(' + this.labelArc.centroid(d) + ')')
        .attr('dy', '.35em')
        .text((d: any) => d.data.Hardware);

    g.append('text').attr('transform', (d: any) => 'translate(' + this.labelPer.centroid(d) + ')')
        .attr('dy', '.35em')
        .text((d: any) => d.data.SalesPercentage + '%');
  }
}
