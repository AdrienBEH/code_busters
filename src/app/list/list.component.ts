import { AfterViewInit, ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { BehaviorSubject, filter, mergeMap, Observable, scan, tap } from 'rxjs';
import { PokeapiService } from 'src/app/core/services/pokeapi.service';
import { Pokeapi, Pokeshowcase } from 'src/app/shared';
import { ScrollDirective } from 'src/app/shared/directives/scroll.directive';

@Component({
    selector: 'app-list',
    templateUrl: 'list.component.html',
    styleUrls: ['list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements AfterViewInit {
    @ViewChild(ScrollDirective) scrollDirective!: ScrollDirective;
    private readonly _offset$: BehaviorSubject<number> = new BehaviorSubject<number>(0)
    public readonly offset$: Observable<number> = this._offset$.asObservable();
    private readonly limit: number = 50;
    public requestPending: boolean = false;
    public readonly pokemonList$: Observable<Pokeapi.PaginatationResponse<Pokeshowcase.PokemonPartial>> = this.offset$.pipe(
        tap((offset: number) => this.requestPending = true),
        mergeMap((offset: number) => {
            return this.pokeapiService.getPokemons({
                limit: this.limit,
                offset
            })
        }),
        scan((
            accPaginatedPokemons: Pokeapi.PaginatationResponse<Pokeshowcase.PokemonPartial>,
            paginatedPokemons: Pokeapi.PaginatationResponse<Pokeshowcase.PokemonPartial>
        ) => {
            return {
                ...accPaginatedPokemons,
                results: [...accPaginatedPokemons.results, ...paginatedPokemons.results]
            };
        }),
        tap((paginatedPokemons: Pokeapi.PaginatationResponse<Pokeshowcase.PokemonPartial>) => {
            if (paginatedPokemons.results.length >= paginatedPokemons.count) this._offset$.complete()
            if (this.scrollDirective.measureScrollOffset('bottom') <= 0) {
                this.increment();
            } else {
                this.requestPending = false;
            }
        })
    );

    constructor(
        private pokeapiService: PokeapiService
    ) {}

    public ngAfterViewInit(): void {
        this.scrollDirective.elementScrolled$.pipe(
            filter(_=> !this.requestPending),
        ).subscribe(_ => {
            if (this.scrollDirective.measureScrollOffset('bottom') <= 0) {
                this.increment();;
            }
        })
    }

    private increment(): void {
        this._offset$.next(this._offset$.value + this.limit);
    }
}
