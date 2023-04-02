import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DetailComponent } from './detail.component';
import { DetailRoutingModule } from './detail-routing.module';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { NgOptimizedImage } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        DetailRoutingModule,
        NgOptimizedImage,
        PipesModule,
    ],
    declarations: [DetailComponent]
})
export class DetailModule {}
