import React, { FC, useState } from 'react';
import Link from 'next/link';
import styles from './card.module.scss';
import poke from '../../models/pokemon';

interface CardInterface {
  url: string;
  /* id: number;
  img: string;
  type: Type[]; */
}

const Card: FC<CardInterface> = ({ url }) => {
  const [pokemon, setpokemon] = useState<poke>();

  useState(() => {
    fetch(url).then((result) => {
      result.json().then((json) => {
        setpokemon(json);
      });
    });
  });
  const getcolor = (tipo: string) => {
    switch (tipo) {
      case `grass`:
        return styles.green;
      case `poison`:
        return styles.purple;
      case `fire`:
        return styles.orange;
      case `flying`:
        return styles.sky;
      case `water`:
        return styles.blue;
      case `bug`:
        return styles.bug;
      case `normal`:
        return styles.gray;
      case `electric`:
        return styles.yellow;
      case `rock`:
        return styles.rock;
      default:
        return styles.default;
    }
  };

  return (
    <div className={styles.container_card}>
      <div className={styles.name}>
        <Link href="/details/[id]" as={`/details/${pokemon?.id}`}>
          <a>{pokemon?.name}</a>
        </Link>
      </div>
      <div className={styles.id}>
        <p>{pokemon?.id.toString().padStart(3, `0`)}</p>
      </div>
      <div>
        <p className={styles.img}>
          <img
            src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon?.id}.png `}
            alt="pokemon img"
          />
        </p>
      </div>
      <div className={styles.type}>
        <p>
          {pokemon?.types.map((i) => (
            <span className={getcolor(i.type.name)}>{i.type.name}</span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Card;
