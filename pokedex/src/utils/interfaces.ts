export enum PokemonTypeNames {
  rock,
  ghost,
  steel,
  water,
  grass,
  psychic,
  ice,
  dark,
  fairy,
  normal,
  fighting,
  flying,
  poison,
  ground,
  bug,
  fire,
  electric,
  dragon,
}

export enum PokemonStatNames {
  hp,
  attack,
  defense,
  "special-attack",
  "special-defense",
  speed,
}

export interface Sprites {
  frontDefault: string;
}

export interface MoveListItem {
  move: ApiListItem;
}
export interface StatListItem {
  baseStat: number;
  effort: number;
  stat: ApiListItem<PokemonStatNames>;
}

export interface Pokemon {
  id: number;
  name: string;
  order: number;
  sprites: Sprites;
  types: PokemonType[];
  height: number;
  weight: number;
  moves: MoveListItem[];
  stats: StatListItem[];
}

export interface PokemonType {
  slot: number;
  type: ApiListItem<PokemonTypeNames>;
}

export interface ApiPage<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface ApiListItem<T = string> {
  name: T;
  url: string;
}
