import React, { FC } from 'react';
import styles from './card.module.scss';
import { Type } from '../../models/pokemon';

interface CardInterface {
  name: string;
  id: number;
  img: string;
  type: Type[];
}

const Card: FC<CardInterface> = ({ name, id, img, type }) => {
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
    <button className={styles.container_card} type="button">
      <div className={styles.name}>
        <p>{name}</p>
      </div>
      <div className={styles.id}>
        <p>{id}</p>
      </div>
      <div>
        <p>
          <img src={img} className={styles.img} alt="pokemon img" />
        </p>
      </div>
      <div className={styles.type}>
        <p>
          {` `}
          {type.map((i) => (
            <span className={getcolor(i.type.name)}>{i.type.name}</span>
          ))}
        </p>
      </div>
    </button>
  );
};

export default Card;
