import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PokemonCardComponent } from './pokemon-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatGridListModule,
        PipesModule
    ],
    declarations: [PokemonCardComponent],
    exports: [PokemonCardComponent]
})
export class PokemonCardModule {}
