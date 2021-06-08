import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ScatterPlotChartComponent } from './scatter-plot-chart/scatter-plot-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    PieChartComponent,
    DashboardComponent,
    BarChartComponent,
    ScatterPlotChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
