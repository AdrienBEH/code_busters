import { NgModule } from '@angular/core';
import {
    ReversePipe,
    SortPipe,
    SpritePipe,
} from '.';

@NgModule({
    declarations: [
        ReversePipe,
        SortPipe,
        SpritePipe,
    ],
    exports: [
        ReversePipe,
        SortPipe,
        SpritePipe,
    ],
})
export class PipesModule {}
