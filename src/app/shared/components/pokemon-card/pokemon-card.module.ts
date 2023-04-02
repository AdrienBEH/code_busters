import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PokemonCardComponent } from './pokemon-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { NgOptimizedImage } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        NgOptimizedImage,
        PipesModule,
    ],
    declarations: [PokemonCardComponent],
    exports: [PokemonCardComponent]
})
export class PokemonCardModule {}
