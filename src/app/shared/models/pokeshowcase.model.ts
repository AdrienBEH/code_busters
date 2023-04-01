import { Pokeapi } from ".";

/**
* [The partial representation of a Pokemon resources used with paginated query.](https://pokeapi.co/docs/v2#pokemon)
*/
export type PokemonPartial = Pokeapi.PokemonPartial & {
   id: number;    // Pokemon id identifier.
};