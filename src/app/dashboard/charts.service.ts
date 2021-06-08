import { Injectable } from '@angular/core';
import { Bar } from '../models/bar';
import { Pie } from '../models/pie';
import { ScatterPlot } from '../models/scatter-plot';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {
    PieChart: Pie[] = [
    {"Hardware": "RAM", "SalesPercentage": "87"},
    {"Hardware": "Processor", "SalesPercentage": "70"},
    {"Hardware": "HardDisk", "SalesPercentage": "56"},
    {"Hardware": "Integrated Chips", "SalesPercentage": "60"},
    {"Hardware": "Mother Board", "SalesPercentage": "32"},
    {"Hardware": "Resistor", "SalesPercentage": "24"},
    {"Hardware": "Capacitor", "SalesPercentage": "38"},
    {"Hardware": "Transistor", "SalesPercentage": "45"}
];

BarChart: Bar[] = [
  {"Hardware": "RAM", "Production": "90000"},
  {"Hardware": "Processor", "Production": "80000"},
  {"Hardware": "HardDisk", "Production": "60000"},
  {"Hardware": "Integrated Chips", "Production": "70000"},
  {"Hardware": "Mother Board", "Production": "12000"},
  {"Hardware": "Resistor", "Production": "60000"},
  {"Hardware": "Capacitor", "Production": "5000"},
  {"Hardware": "Transistor", "Production": "4000"}
];
ScatterPlot:ScatterPlot[] = [
    {"Hardware": "RAM", "sold":"95624" , "Profit": "2011"},
    {"Hardware": "Processor", "sold":"80978" , "Profit": "2011"},
    {"Hardware": "Processor", "sold":"73441" , "Profit": "2012"},
    {"Hardware": "RAM", "sold":"96213" , "Profit": "2012"},
    {"Hardware": "HardDisk", "sold":"57952" , "Profit": "2013"},
    {"Hardware": "RAM", "sold":"86891" , "Profit": "2014"},
    {"Hardware": "Processor", "sold":"78322" , "Profit": "2015"},
    {"Hardware": "HardDisk", "sold":"60214" , "Profit": "2015"},
    {"Hardware": "RAM", "sold":"84523" , "Profit": "2015"},
    {"Hardware": "Integrated Chips", "sold": "66678", "Profit": "2016"},
    {"Hardware": "RAM", "sold":"93451" , "Profit": "2016"},
    {"Hardware": "RAM", "sold":"92571" , "Profit": "2017"},
    {"Hardware": "Processor", "sold":"77863" , "Profit": "2018"},
    {"Hardware": "RAM", "sold":"89637" , "Profit": "2018"},
    {"Hardware": "HardDisk", "sold":"58289" , "Profit": "2019"},
    {"Hardware": "RAM", "sold":"88123" , "Profit": "2019"},
    {"Hardware": "RAM", "sold":"96320" , "Profit": "2020"},
    {"Hardware": "HardDisk", "sold":"59786" , "Profit": "2020"}
];
  constructor() { }
}
