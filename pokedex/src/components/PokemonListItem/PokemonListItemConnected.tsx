import { fetchPokemonDetails } from "api/services";
import React from "react";
import { useQuery } from "react-query";
import { getSlugFromUrl } from "utils/helpers";
import PokemonListItem from "./PokemonListItem";

interface PokemonListItemConnectedProps {
  name: string;
  url: string;
  onClick: () => void;
}

const PokemonListItemConnected: React.FC<PokemonListItemConnectedProps> = ({
  name,
  url,
  onClick,
}) => {
  const id = getSlugFromUrl(url, "pokemon");

  const { data, isLoading } = useQuery(`pokemon-${id}`, () =>
    fetchPokemonDetails(id)
  );

  return (
    <PokemonListItem
      pokemon={data}
      name={name}
      isLoading={isLoading}
      onClick={onClick}
    />
  );
};

export default PokemonListItemConnected;
