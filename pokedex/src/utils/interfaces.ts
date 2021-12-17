export enum PokemonTypeNames {
  rock = "rock",
  ghost = "ghost",
  steel = "steel",
  water = "water",
  grass = "grass",
  psychic = "psychic",
  ice = "ice",
  dark = "dark",
  fairy = "fairy",
  normal = "normal",
  fighting = "fighting",
  flying = "flying",
  poison = "poison",
  ground = "ground",
  bug = "bug",
  fire = "fire",
  electric = "electric",
  dragon = "dragon",
}

export interface Sprites {
  frontDefault: string;
}

export interface Pokemon {
  id: number;
  name: string;
  order: number;
  sprites: Sprites;
  types: PokemonType[];
}

export interface PokemonType {
  slot: number;
  type: {
    name: PokemonTypeNames;
    url: string;
  };
}

export interface ApiPage<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface ApiListItem {
  name: string;
  url: string;
}
