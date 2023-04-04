import { Pokeapi } from ".";

/**
* [The partial representation of a Pokemon resources used with paginated query.](https://pokeapi.co/docs/v2#pokemon)
*/
export type PokemonPartial = Pokeapi.PokemonPartial & {
   id: number;    // Pokemon id identifier.
};

export enum TypeColors {
	bug = '#A8B820',
	dark = '#705848',
	dragon = '#7038F8',
	electric = '#F8D030',
	fairy = '#EE99AC',
	fighting = '#C03028',
	fire = '#F08030',
	flying = '#C03028',
	ghost = '#705898',
	grass = '#78C850',
	ground = '#E0C068',
	ice = '#98D8D8',
	normal = '#A8A878',
	poison = '#A040A0',
	psychic = '#F85888',
	rock = '#B8A038',
	steel = '#B8B8D0',
	water = '#6890F0',
};
