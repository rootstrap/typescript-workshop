import apiClient from "api/apiClient";

export const fetchPokemonList = async ({ pageParam = 0 }) => {
  console.log(
    "🚀 ~ file: services.ts ~ line 4 ~ fetchPokemonList ~ pageParam",
    pageParam
  );
  const { data } = await apiClient.get("/pokemon", {
    params: { limit: 20, offset: pageParam },
  });

  return data;
};

export const fetchPokemonDetails = async (id: string | null) => {
  if (!id) return null;

  const { data } = await apiClient.get(`/pokemon/${id}`);

  return data;
};
