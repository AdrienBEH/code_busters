import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { PokeapiService } from "src/app/core/services";
import { Pokeapi } from "src/app/shared/models";

@Injectable({ providedIn: 'root' })
export class PokemonResolver implements Resolve<Pokeapi.Pokemon> {
    constructor(private pokeapiService: PokeapiService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Pokeapi.Pokemon>|Promise<Pokeapi.Pokemon>|Pokeapi.Pokemon {
        return this.pokeapiService.getPokemon(route.paramMap.get('pokemon_identifier') as string);
    }
}