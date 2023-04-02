import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonResolver } from 'src/app/shared/resolvers/pokemon.resolver';
import { DetailComponent } from './detail.component';

const routes: Routes = [
    {
        path: '',
        component: DetailComponent,
        resolve: {
            pokemon: PokemonResolver
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DetailRoutingModule { }
