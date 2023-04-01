import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sprite'
})
export class SpritePipe implements PipeTransform {

    /**
     * Provides the full endpoint to sprite fetching of a requested resource.
     * 
     * @param {number|string} identifier - Identifier of the resouce (id or name).
     * @param {option} option - The version of the desired sprite.
     * @returns {string} The sprite endpoint.
     */
    transform(
        identifier: number|string,
        option: option = 'front_default'
    ): string {
        switch (option) {
            case 'back_default': return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${identifier}.png`;
            case 'back_shiny': return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${identifier}.png`;
            case 'front_default': return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${identifier}.png`;
            case 'front_shiny': return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${identifier}.png`;
            default: return `${identifier}`;
        }
    }
}

/**
 * Version of different sprites.
 */
type option = 'back_default' |
    'back_shiny' |
    'front_default' |
    'front_shiny';