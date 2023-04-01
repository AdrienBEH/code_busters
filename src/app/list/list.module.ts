import { AsyncPipe, CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PokemonCardModule } from 'src/app/shared/components';
import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ListRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        PokemonCardModule
    ],
    declarations: [ListComponent],
    providers: [
        AsyncPipe
    ],
})
export class ListModule {}
