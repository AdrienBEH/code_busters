import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { DetailRoutingModule } from './detail-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { RadarChartModule } from 'src/app/shared/components/radar-chart/radar-chart.module';
import { DirectivesModule } from '../shared';

@NgModule({
    imports: [
        CommonModule,
        DetailRoutingModule,
        DirectivesModule,
        MatIconModule,
        NgOptimizedImage,
        PipesModule,
        RadarChartModule,
    ],
    declarations: [DetailComponent]
})
export class DetailModule {}
