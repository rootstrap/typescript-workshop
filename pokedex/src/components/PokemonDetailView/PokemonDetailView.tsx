import React from "react";
import { Dialog } from "@headlessui/react";

import { Pokemon } from "utils/interfaces";
import BackArrow from "assets/BackArrow";
import Logo from "assets/Logo";
import { colorsByType, grayScale } from "utils/colors";
import { capitalize } from "lodash";
import ChevronRight from "assets/ChevronRight";
import Loader from "react-loader-spinner";

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
  hasPrev,
  hasNext,
  onClose,
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
      <Dialog.Overlay className="fixed inset-0 min-h-screen bg-dark-gray opacity-30" />
      <div className="flex items-center justify-center min-h-screen">
        <div
          className="relative z-20 w-full max-w-md max-h-screen mx-auto overflow-hidden overflow-y-scroll rounded-lg"
          style={{ backgroundColor: typeColor }}
        >
          <div className="relative h-[270px] flex flex-col -mb-12 justify-between px-6 pt-6">
            <Logo className="absolute pointer-events-none top-2 right-2 fill-white opacity-10 w-52 h-52" />
            <div className="flex items-center justify-between">
              <button onClick={onClose}>
                <BackArrow className="fill-white" />
              </button>
              {!!pokemon && (
                <>
                  <Dialog.Title className="text-2xl font-bold text-white">
                    {capitalize(pokemon.name)}
                  </Dialog.Title>
                  <span className="justify-end font-bold text-white text-md">
                    <span className="sr-only">Number</span>
                    <span aria-hidden>#</span>
                    {pokemon.order}
                  </span>
                </>
              )}
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={goPrev}
                disabled={!hasPrev}
                className="flex items-center justify-center -ml-4 w-11 h-11 disabled:opacity-40"
              >
                <ChevronRight className="rotate-180 fill-white" />
              </button>
              {!!pokemon && (
                <img
                  src={pokemon.sprites.frontDefault}
                  className="w-40"
                  alt=""
                />
              )}
              <button
                onClick={goNext}
                disabled={!hasNext}
                className="flex items-center justify-center -mr-4 w-11 h-11 disabled:opacity-40"
              >
                <ChevronRight className="fill-white " />
              </button>
            </div>
          </div>

          {!!pokemon && (
            <div className="h-40 mx-2 mb-2 bg-white rounded-lg">test</div>
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
