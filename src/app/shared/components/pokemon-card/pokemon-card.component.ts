import { Component, Input } from '@angular/core';
import { Pokeshowcase } from 'src/app/shared/models';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: 'pokemon-card.component.html',
  styleUrls: ['pokemon-card.component.scss'],
})
export class PokemonCardComponent {
  @Input() pokemon!: Pokeshowcase.PokemonPartial;
}
