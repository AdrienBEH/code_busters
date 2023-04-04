import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PokeapiService } from '../core/services';
import { Pokeapi } from '../shared';

@Component({
    selector: 'app-detail',
    templateUrl: 'detail.component.html',
    styleUrls: ['detail.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailComponent {
    public readonly pokemon: Pokeapi.Pokemon = this.route.snapshot.data['pokemon'];
    public readonly species$: Observable<any> = this.pokeapiService.getSpecies(this.pokemon);
    public readonly evMap: {[key in keyof typeof Pokeapi.stats]: string} = {
        'hp': Pokeapi.stats['hp'],
        'attack': Pokeapi.stats['attack'],
        'defense': Pokeapi.stats['defense'],
        'special-attack': Pokeapi.stats['special-attack'],
        'special-defense': Pokeapi.stats['special-defense'],
        'speed': Pokeapi.stats['speed'],
    }

    constructor(
        private route: ActivatedRoute,
        private pokeapiService: PokeapiService,
    ) {}
}
