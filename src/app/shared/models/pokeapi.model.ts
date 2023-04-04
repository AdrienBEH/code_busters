import { Pokeshowcase } from ".";

/**
 * [Paginated list of resources corresponding to the targeted endpoint.](https://pokeapi.co/docs/v2#resource-listspagination-section).
 * 
 * @template R - The resource type corresponding to the targeted endpoint.
 */
export type PaginatationResponse<R> = {
    count: number;
    next: null|string;      // Rest API URL.
    previous: null|string;  // Rest API URL.
    results: R[];           // Endpoint ressources result.
};

/**
 * [The partial representation of a Pokemon resources used with paginated query.](https://pokeapi.co/docs/v2#pokemon).
 */
export type PokemonPartial = Pick<Pokemon, 'name'> & {
    url: string;    // Pokemon detail endpoint reference 'https://pokeapi.co/api/v2/pokemon/{id or name}/'.
};

/**
 * [The representation of Pokemon resources from 'https://pokeapi.co/api/v2/pokemon/{id or name}/' endpoint result.](https://pokeapi.co/docs/v2#pokemon).
 */
export type Pokemon = {
    abilities: Array<{
        ability: {
            name: string;
            url: string;
        };
        is_hidden: boolean;
        slot: number;
    }>
    id: number;
    height: number;
    name: string;           // Pokemon name identifier.
    species: {
        name: string;
        url: string;
    };
    stats: statValue[];
    types: Array<{
        slot: number;
        type: {
            name: keyof typeof Pokeshowcase.TypeColors;
            url: string;
        };
    }>;
    weight: number;
    [key: string]: any;     // Non-exhaustive properties. Please refer to the [documentation](https://pokeapi.co/docs/v2#pokemon).
};

export type statValue = {
    base_stat: number;
    effort: number;
    stat: stat;
}

export type stat = {
    name: keyof typeof stats;
    url: string;
}

export type Species = {
    color: {
        name: keyof typeof colors;
        url: string;
    };
    is_baby: boolean;
    [key: string]: any;     // Non-exhaustive properties. Please refer to the [documentation](https://pokeapi.co/docs/v2#pokemon-species).
}

export enum colors {
    black = 'black',
    blue = 'blue',
    brown = 'brown',
    gray = 'gray',
    green = 'green',
    pink = 'pink',
    purple = 'purple',
    red = 'red',
    white = 'white',
    yellow = 'yellow',
}

export enum stats {
    hp = 'HP',
    attack = 'Atk',
    defense = 'Def',
    'special-attack' = 'Sp.Atk',
    'special-defense' = 'Sp.Def',
    speed = 'Speed',
}