import { NgModule } from '@angular/core';
import {
    FootPipe,
    GramPipe,
    MeterPipe,
    OrderPipe,
    PoundPipe,
    ReversePipe,
    SortPipe,
    SpritePipe,
} from '.';

@NgModule({
    declarations: [
        FootPipe,
        GramPipe,
        MeterPipe,
        OrderPipe,
        PoundPipe,
        ReversePipe,
        SortPipe,
        SpritePipe,
    ],
    exports: [
        FootPipe,
        GramPipe,
        MeterPipe,
        OrderPipe,
        PoundPipe,
        ReversePipe,
        SortPipe,
        SpritePipe,
    ],
})
export class PipesModule {}
