import React, { useMemo } from "react";
import { useInfiniteQuery } from "react-query";

import { getParamFromUrl } from "utils/helpers";
import { fetchPokemonList } from "api/services";
import PokemonListView from "./PokemonListView";
import { flatMap } from "lodash";
import { ApiListItem, ApiPage } from "utils/interfaces";

const PokemonListViewConnected: React.FC = () => {
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

  return (
    <PokemonListView
      pokemonList={listData}
      hasNextPage={!!hasNextPage}
      fetchNextPage={fetchNextPage}
    />
  );
};

export default PokemonListViewConnected;
