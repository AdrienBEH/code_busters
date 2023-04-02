import { AsyncPipe, CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PokemonCardModule } from 'src/app/shared/components';
import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ListRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        PokemonCardModule,
        DirectivesModule,
    ],
    declarations: [ListComponent],
    providers: [
        AsyncPipe
    ],
})
export class ListModule {}
