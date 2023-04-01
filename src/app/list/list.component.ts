import { Component } from '@angular/core';
import { BehaviorSubject, mergeMap, Observable, scan, tap } from 'rxjs';
import { PokeapiService } from 'src/app/core/services/pokeapi.service';
import { Pokeapi, Pokeshowcase } from 'src/app/shared';

@Component({
    selector: 'app-list',
    templateUrl: 'list.component.html',
    styleUrls: ['list.component.scss'],
})
export class ListComponent {
    _offset$: BehaviorSubject<number> = new BehaviorSubject<number>(0)
    offset$: Observable<number> = this._offset$.asObservable();
    pokemonList$: Observable<Pokeapi.PaginatationResponse<Pokeshowcase.PokemonPartial>> = this.offset$.pipe(
        mergeMap((offset: number) => {
            return this.pokeapiService.getPokemons({
                limit: 10,
                offset
            })
        }),
        scan((acc, val) => {
            return {
                ...acc,
                results: [...acc.results, ...val.results]
            };
        }),
    );

    constructor(
        private pokeapiService: PokeapiService
    ) {
    // setInterval(() => {
    setTimeout(() => {
        this._offset$.next(this._offset$.value + 10)
    }, 5000)
  }
}
