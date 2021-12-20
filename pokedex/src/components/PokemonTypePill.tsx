import { capitalize } from "lodash";
import React from "react";
import { colorsByType } from "utils/constants/colors";
import { PokemonTypeNames } from "utils/interfaces";

interface PokemonTypePillProps {
  name: PokemonTypeNames;
}

const PokemonTypePill: React.FC<PokemonTypePillProps> = ({ name }) => (
  <li
    className="px-2 py-1 font-bold text-white rounded-full"
    style={{ backgroundColor: colorsByType[name] }}
  >
    {capitalize(name.toString())}
  </li>
);

export default PokemonTypePill;
