import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { RadarChartComponent } from './radar-chart.component';

@NgModule({
    imports: [
        CommonModule,
        NgxEchartsModule,
    ],
    declarations: [RadarChartComponent],
    exports: [RadarChartComponent],
})
export class RadarChartModule {}
