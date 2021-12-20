import React from "react";
import { Dialog } from "@headlessui/react";

import { Pokemon } from "utils/interfaces";
import { colorsByType, grayScale } from "utils/constants/colors";
import Header from "./components/Header";
import Loader from "react-loader-spinner";
import MainStats from "./components/MainStats";
import BaseStats from "./components/BaseStats";
import PokemonTypePill from "components/PokemonTypePill";

interface PokemonDetailViewProps {
  pokemon?: Pokemon;
  isOpen: boolean;
  isLoading: boolean;
  hasPrev: boolean;
  hasNext: boolean;
  onClose: () => void;
  goPrev: () => void;
  goNext: () => void;
}

const PokemonDetailView: React.FC<PokemonDetailViewProps> = ({
  pokemon,
  isOpen,
  isLoading,
  onClose,
  hasPrev,
  hasNext,
  goPrev,
  goNext,
}) => {
  const typeColor = pokemon
    ? colorsByType[pokemon.types[0].type.name]
    : grayScale.mediumGray;

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="fixed inset-0 z-10 overflow-y-auto"
    >
      <Dialog.Overlay className="fixed inset-0 bg-dark-gray opacity-30" />
      <div className="flex items-center justify-center h-screen">
        <div
          className="relative z-20 w-full max-w-md mx-auto overflow-hidden rounded-lg"
          style={{ backgroundColor: typeColor }}
        >
          <Header
            pokemon={pokemon}
            hasPrev={hasPrev}
            hasNext={hasNext}
            onClose={onClose}
            goPrev={goPrev}
            goNext={goNext}
          />
          {!!pokemon && (
            <div className="px-5 pt-12 mx-2 mb-2 bg-white rounded-lg pb-11  overflow-y-scroll max-h-[300px] md:max-h-[400px]">
              <h2 className="sr-only">Types</h2>
              <ul className="flex justify-center gap-4">
                {pokemon.types.map(({ type: { name } }) => (
                  <PokemonTypePill
                    key={`pokemon-detail-type-${name}`}
                    name={name}
                  />
                ))}
              </ul>
              <h2
                className="mt-4 text-xl font-bold text-center"
                style={{ color: typeColor }}
              >
                About
              </h2>
              <MainStats pokemon={pokemon} />
              <h2
                className="my-4 text-xl font-bold text-center"
                style={{ color: typeColor }}
              >
                Base Stats
              </h2>
              <BaseStats pokemon={pokemon} />
            </div>
          )}
          {isLoading && (
            <Loader type="Puff" width={40} height={40} color={typeColor} />
          )}
        </div>
      </div>
    </Dialog>
  );
};

export default PokemonDetailView;
