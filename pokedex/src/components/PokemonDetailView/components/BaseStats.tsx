import React from "react";

import { Pokemon } from "utils/interfaces";
import { colorsByType } from "utils/constants/colors";
import { STATS_ABBR } from "utils/constants";

interface BaseStatsProps {
  pokemon: Pokemon;
}

const BaseStats: React.FC<BaseStatsProps> = ({ pokemon }) => {
  const typeColor = colorsByType[pokemon.types[0].type.name];
  return (
    <ul>
      {pokemon.stats.map(({ baseStat, stat: { name } }) => (
        <li key={name}>
          <span className="font-bold" style={{ color: typeColor }}>
            {STATS_ABBR[name]}
          </span>
          <div className="w-full rounded-full h-2.5 bg-light-gray overflow-hidden">
            <div
              className="h-2.5 rounded-full"
              style={{
                width: (baseStat * 100) / 255,
                backgroundColor: typeColor,
              }}
            ></div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BaseStats;
