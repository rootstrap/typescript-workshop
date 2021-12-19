import React from "react";

import { Pokemon } from "utils/interfaces";
import Height from "assets/Height";
import Weight from "assets/Weight";
import { capitalize } from "lodash";

interface MainStatsProps {
  pokemon: Pokemon;
}

const MainStats: React.FC<MainStatsProps> = ({ pokemon }) => {
  return (
    <div className="flex flex-wrap justify-center py-6">
      <div className="flex flex-col items-center justify-between px-6">
        <div className="flex">
          <Weight className="w-5 h-5 mr-2 fill-dark-gray" />
          {pokemon.weight / 10} Kg
        </div>
        <div className="text-xs text-medium-gray" aria-hidden>
          Weight
        </div>
      </div>
      <div className="flex flex-col items-center justify-between px-6 border-x-2 border-light-gray">
        <div className="flex">
          <Height className="w-5 h-5 mr-2 fill-dark-gray" />
          {pokemon.height / 10} m
        </div>
        <div className="text-xs text-medium-gray" aria-hidden>
          Height
        </div>
      </div>
      <div className="flex flex-col items-center px-6">
        <div className="order-2 text-xs text-medium-gray">Moves</div>
        <p className="text-center">
          {pokemon.moves.slice(0, 2).map(({ move: { name } }) => (
            <>
              {capitalize(name.replace("-", " "))}
              <br />
            </>
          ))}
        </p>
      </div>
    </div>
  );
};

export default MainStats;
