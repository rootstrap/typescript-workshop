import React, { useMemo, useState } from "react";
import { useInfiniteQuery } from "react-query";
import flatMap from "lodash/flatMap";

import { getParamFromUrl } from "utils/helpers";
import Layout from "./Layout";
import { ApiPage, ApiListItem } from "utils/interfaces";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "react-loader-spinner";
import PokemonListItem from "./PokemonListItem";
import { fetchPokemonList } from "api/services";
import { grayScale } from "utils/colors";
import PokemonDetailView from "./PokemonDetailView";

const PokemonListView: React.FC = () => {
  const [selectedItemIndex, setSelectedPokemonIndex] = useState<
    number | undefined
  >();
  const [selectedItem, setSelectedPokemon] = useState<
    ApiListItem | undefined
  >();
  console.log(
    "🚀 ~ file: PokemonListView.tsx ~ line 17 ~ selectedItem",
    selectedItem
  );

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery(
    "pokemon-list",
    fetchPokemonList,
    {
      getNextPageParam: (lastPage) => getParamFromUrl(lastPage.next, "offset"),
    }
  );

  const listData = useMemo(
    () =>
      flatMap<ApiPage<ApiListItem>, ApiListItem>(
        data?.pages,
        (page) => page.results
      ),
    [data]
  );

  const hasPrev = selectedItemIndex !== undefined && selectedItemIndex > 0;
  console.log("🚀 ~ file: PokemonListView.tsx ~ line 45 ~ hasPrev", hasPrev);
  const hasNext =
    selectedItemIndex !== undefined && selectedItemIndex < listData.length;
  console.log("🚀 ~ file: PokemonListView.tsx ~ line 47 ~ hasNext", hasNext);

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
      setSelectedPokemon(listData[newIndex]);
      setSelectedPokemonIndex(newIndex);
    }
  };

  const handleNext = () => {
    if (hasNext) {
      const newIndex = selectedItemIndex + 1;
      setSelectedPokemon(listData[newIndex]);
      setSelectedPokemonIndex(newIndex);
    }
  };

  return (
    <Layout>
      <InfiniteScroll
        scrollThreshold="0.7"
        dataLength={listData.length}
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
        {listData.map((item, index) => (
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
