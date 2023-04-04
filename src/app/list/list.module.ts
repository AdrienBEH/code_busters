import { AsyncPipe, CommonModule } from '@angular/common';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';
import { ListComponent } from './list.component';
import { ListRoutingModule } from './list-routing.module';
import { NgModule } from '@angular/core';
import { PokemonCardModule } from 'src/app/shared/components';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
    imports: [
        CommonModule,
        DirectivesModule,
        ListRoutingModule,
        MatIconModule,
        MatProgressSpinnerModule,
        PokemonCardModule,
    ],
    declarations: [ListComponent],
    providers: [
        AsyncPipe
    ],
})
export class ListModule {}
