import React from "react";
import { Dialog } from "@headlessui/react";

import { Pokemon } from "utils/interfaces";
import BackArrow from "assets/BackArrow";
import Logo from "assets/Logo";
import { capitalize } from "lodash";
import ChevronRight from "assets/ChevronRight";

interface HeaderProps {
  pokemon?: Pokemon;
  hasPrev: boolean;
  hasNext: boolean;
  onClose: () => void;
  goPrev: () => void;
  goNext: () => void;
}

const Header: React.FC<HeaderProps> = ({
  pokemon,
  hasPrev,
  hasNext,
  onClose,
  goPrev,
  goNext,
}) => (
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
        <img src={pokemon.sprites.frontDefault} className="w-40" alt="" />
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
);

export default Header;
