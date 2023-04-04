import { Injectable } from '@angular/core';

import { map, Observable, tap } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Pokeapi, Pokeshowcase } from 'src/app/shared';

@Injectable({ providedIn: 'root' })
export class PokeapiService {
private readonly POKEAPI_URL: string = 'https://pokeapi.co/api/v2/';

constructor(
    private httpClient: HttpClient,
) {}

    public getPokemons(query?: {offset?: number; limit?: number}): Observable<Pokeapi.PaginatationResponse<Pokeshowcase.PokemonPartial>> {
        const params: HttpParams = new HttpParams().appendAll(query ?? {});
        return this.httpClient.get<Pokeapi.PaginatationResponse<Pokeapi.PokemonPartial>>(
            `${this.POKEAPI_URL}pokemon/`,
            {params}
        ).pipe(
            map((response: Pokeapi.PaginatationResponse<Pokeapi.PokemonPartial>) => {
                return {
                    ...response,
                    results: response.results.map((pokemon: Pokeapi.PokemonPartial) => PokeapiPokemonPartialToPokeshowcasePokemonPartial(pokemon))
                }
            })
        )
    }

    public getPokemon(identifier: number|string): Observable<Pokeapi.Pokemon> {
        return this.httpClient.get<Pokeapi.Pokemon>(`${this.POKEAPI_URL}pokemon/${identifier}/`)
    }

    public getSpecies(pokemon: Pokeapi.Pokemon): Observable<Pokeapi.Species> {
        return this.httpClient.get<Pokeapi.Species>(pokemon.species.url);
    }
}

function PokeapiPokemonPartialToPokeshowcasePokemonPartial(pokemon: Pokeapi.PokemonPartial): Pokeshowcase.PokemonPartial {
    const regex = new RegExp(/\/(\d+)\/$/);
    return {
        ...pokemon,
        id: Number.parseInt((regex.exec(pokemon.url) as RegExpExecArray)[1])
    };
}
