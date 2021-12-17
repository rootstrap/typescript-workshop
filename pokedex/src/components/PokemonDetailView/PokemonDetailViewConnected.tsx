import { fetchPokemonDetails } from "api/services";
import React from "react";
import { useQuery } from "react-query";
import { getSlugFromUrl } from "utils/helpers";
import { Pokemon } from "utils/interfaces";
import PokemonDetailView from "./PokemonDetailView";

interface PokemonDetailViewConnectedProps {
  name?: string;
  url?: string;
  isOpen: boolean;
  hasPrev: boolean;
  hasNext: boolean;
  onClose: () => void;
  goPrev: () => void;
  goNext: () => void;
}

const PokemonDetailViewConnected: React.FC<PokemonDetailViewConnectedProps> = ({
  url,
  ...restProps
}) => {
  const id = url ? getSlugFromUrl(url, "pokemon") : null;

  const { data, isLoading } = useQuery(`pokemon-${id}`, () =>
    fetchPokemonDetails(id)
  );

  return (
    <PokemonDetailView pokemon={data} isLoading={isLoading} {...restProps} />
  );
};

export default PokemonDetailViewConnected;
