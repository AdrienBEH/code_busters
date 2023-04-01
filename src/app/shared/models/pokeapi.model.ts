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
    name: string;           // Pokemon name identifier.
    [key: string]: any;     // Non-exhaustive properties. Please refer to the [documentation](https://pokeapi.co/docs/v2#pokemon).
};