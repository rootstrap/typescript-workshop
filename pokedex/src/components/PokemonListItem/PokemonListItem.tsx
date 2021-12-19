import { capitalize } from "lodash";
import React from "react";
import Loader from "react-loader-spinner";
import { colorsByType, grayScale } from "utils/constants/colors";
import { Pokemon } from "utils/interfaces";

interface PokemonListItemProps {
  pokemon?: Pokemon;
  name: string;
  isLoading: boolean;
  onClick: () => void;
}

const PokemonListItem: React.FC<PokemonListItemProps> = ({
  pokemon,
  name,
  isLoading,
  onClick,
}) => {
  const typeColor = pokemon
    ? colorsByType[pokemon.types[0].type.name]
    : grayScale.mediumGray;

  return (
    <button
      className="relative overflow-hidden bg-white border-4 outline-none motion-safe:transition-transform rounded-3xl motion-safe:hover:scale-105 focus:ring-4"
      style={{ borderColor: typeColor }}
      onClick={onClick}
      aria-disabled={isLoading}
    >
      {!!pokemon && (
        <div className="absolute top-2 right-3" style={{ color: typeColor }}>
          <span className="sr-only">Number</span>
          <span aria-hidden>#</span>
          {pokemon.order}
        </div>
      )}
      <div className="flex items-center justify-center w-40 h-40 p-2">
        {!!pokemon && (
          <img
            className="w-40 h-40"
            src={pokemon.sprites.frontDefault}
            alt=""
          />
        )}
        {isLoading && (
          <Loader type="Puff" width={40} height={40} color={typeColor} />
        )}
      </div>
      <div
        className="px-4 py-2 text-white"
        style={{ backgroundColor: typeColor }}
      >
        {capitalize(pokemon?.name || name)}
      </div>
    </button>
  );
};

export default PokemonListItem;
