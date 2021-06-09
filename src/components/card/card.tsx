import React, { FC } from 'react';
import styles from './card.module.scss';

interface CardInterface {
  name: string;
  id: string;
  img: string;
  type: string[];
}

const Card: FC<CardInterface> = ({ name, id, img, type }) => (
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
          <span>{i}</span>
        ))}
      </p>
    </div>
  </button>
);

export default Card;
