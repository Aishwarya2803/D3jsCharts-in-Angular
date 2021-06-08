import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Axis from 'd3-axis';
import * as d3Format from 'd3-format';
import { ChartsService } from '../dashboard/charts.service';

@Component({
  selector: 'app-scatter-plot-chart',
  templateUrl: './scatter-plot-chart.component.html',
  styleUrls: ['./scatter-plot-chart.component.css']
})
export class ScatterPlotChartComponent implements OnInit {
  
  private scatterSvg:any;
  private scatterMargin = 50;
  private scatterWidth = 750- (this.scatterMargin * 2);
  private scatterHeight = 400 - (this.scatterMargin * 2);
  constructor(public service:ChartsService) { }

  ngOnInit(): void {
    this.Svg();
    this.drawPlot();
  }
  private Svg(): void {
    this.scatterSvg = d3.select("figure#scatter")
    .append("svg")
    .attr("width", this.scatterWidth + (this.scatterMargin * 2)+20)
    .attr("height", this.scatterHeight + (this.scatterMargin * 2))
    .append("g")
    .attr("transform", "translate(" + this.scatterMargin + "," + this.scatterMargin + ")");
}
private drawPlot(): void {
  // Add X axis
  const x = d3Scale.scaleLinear()
  .domain([2010, 2020])
  .range([ 0, this.scatterWidth ]);
  this.scatterSvg.append("g")
  .attr("transform", "translate(0," + this.scatterHeight + ")")
  .call(d3Axis.axisBottom(x).tickFormat(d3Format.format("d")));

  // Add Y axis
  const y = d3Scale.scaleLinear()
  .domain([0, 150000])
  .range([ this.scatterHeight, 0]);
  this.scatterSvg.append("g")
  .call(d3Axis.axisLeft(y));

  // Add dots
  const dots = this.scatterSvg.append('g');
  dots.selectAll("dot")
  .data(this.service.ScatterPlot)
  .enter()
  .append("circle")
  .attr("cx", (d: { Profit: any; }) => x(d.Profit))
  .attr("cy", (d: { sold: any; }) => y(d.sold))
  .attr("r", 7)
  .style("opacity", .5)
  .style("fill", "#c43560");

  // Add labels
  dots.selectAll("text")
  .data(this.service.ScatterPlot)
  .enter()
  .append("text")
  .text((d: { Hardware: any; }) => d.Hardware)
  .attr("x", (d: { Profit: any; }) => x(d.Profit))
  .attr("y", (d: { sold: any; }) => y(d.sold))
}
}
