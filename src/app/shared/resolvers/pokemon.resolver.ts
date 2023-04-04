import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { catchError, Observable } from "rxjs";
import { PokeapiService } from "src/app/core/services";
import { Pokeapi } from "src/app/shared/models";

@Injectable({ providedIn: 'root' })
export class PokemonResolver implements Resolve<Pokeapi.Pokemon> {
    constructor(
        private pokeapiService: PokeapiService,
        private router: Router,
    ) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Pokeapi.Pokemon>|Promise<Pokeapi.Pokemon>|Pokeapi.Pokemon {
        return this.pokeapiService.getPokemon(route.paramMap.get('pokemon_identifier') as string).pipe(
            catchError((
                err: HttpErrorResponse,
                caught: Observable<Pokeapi.Pokemon>
            ) => {
                this.router.navigate(['list']);
                console.warn(err);  // TODO User material snackbar!
                return caught;
            })
        );
    }
}