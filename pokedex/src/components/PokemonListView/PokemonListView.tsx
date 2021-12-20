import React, { useState } from "react";
import { FetchNextPageOptions, InfiniteQueryObserverResult } from "react-query";

import Layout from "../Layout";
import { ApiListItem } from "utils/interfaces";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "react-loader-spinner";
import PokemonListItem from "../PokemonListItem";
import { grayScale } from "utils/constants/colors";
import PokemonDetailView from "../PokemonDetailView";

interface PokemonListViewProps {
  pokemonList: ApiListItem[];
  hasNextPage: boolean;
  fetchNextPage: (
    options?: FetchNextPageOptions
  ) => Promise<InfiniteQueryObserverResult>;
}

const PokemonListView: React.FC<PokemonListViewProps> = ({
  pokemonList,
  hasNextPage,
  fetchNextPage,
}) => {
  const [selectedItemIndex, setSelectedPokemonIndex] = useState<
    number | undefined
  >();
  const [selectedItem, setSelectedPokemon] = useState<
    ApiListItem | undefined
  >();

  const hasPrev = selectedItemIndex !== undefined && selectedItemIndex > 0;
  const hasNext =
    selectedItemIndex !== undefined && selectedItemIndex < pokemonList.length;

  const handleSelect = (item: ApiListItem, index: number) => {
    setSelectedPokemon(item);
    setSelectedPokemonIndex(index);
  };

  const handleClose = () => {
    setSelectedPokemon(undefined);
    setSelectedPokemonIndex(undefined);
  };

  const handlePrev = () => {
    if (hasPrev) {
      const newIndex = selectedItemIndex - 1;
      setSelectedPokemon(pokemonList[newIndex]);
      setSelectedPokemonIndex(newIndex);
    }
  };

  const handleNext = () => {
    if (hasNext) {
      const newIndex = selectedItemIndex + 1;
      setSelectedPokemon(pokemonList[newIndex]);
      setSelectedPokemonIndex(newIndex);
    }
  };

  return (
    <Layout>
      <InfiniteScroll
        scrollThreshold="0.7"
        dataLength={pokemonList.length}
        next={() => fetchNextPage()}
        hasMore={!!hasNextPage}
        loader={
          <Loader
            type="Puff"
            width={40}
            height={40}
            color={grayScale.mediumGray}
          />
        }
        className="flex flex-wrap justify-center gap-4 pt-4 overflow-visible"
      >
        {pokemonList.map((item, index) => (
          <PokemonListItem
            key={item.url}
            {...item}
            onClick={() => handleSelect(item, index)}
          />
        ))}
      </InfiniteScroll>
      <PokemonDetailView
        {...selectedItem}
        isOpen={!!selectedItem}
        hasPrev={hasPrev}
        hasNext={hasNext}
        onClose={handleClose}
        goPrev={handlePrev}
        goNext={handleNext}
      />
    </Layout>
  );
};

export default PokemonListView;
