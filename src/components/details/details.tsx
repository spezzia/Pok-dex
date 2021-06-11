import React, { FC } from 'react';
import styles from './details.module.scss';
import pokemon from '../../models/pokemon';
import CardImage from '../cardimg/cardimg';

interface DetailsInterface {
  info: pokemon;
}

const Details: FC<DetailsInterface> = ({ info }) => {
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
    <div className={styles.container_details}>
      <CardImage
        id={info.id}
        back={info.sprites.back_default}
        front={info.sprites.front_default}
      />
      <div className={styles.container_info}>
        <div className={styles.name}>
          <p>{info.name}</p>
        </div>
        <div className={styles.type}>
          <p>
            {info.types.map((i) => (
              <span key={i.type.name} className={getcolor(i.type.name)}>
                {i.type.name}
              </span>
            ))}
          </p>
        </div>
        <div>
          <div className={styles.details}>
            <p className={styles.title}>Pokedex Number</p>
            <p className={styles.text}>{info.id}</p>
            <hr />
          </div>
          <div className={styles.details}>
            <p className={styles.title}>Height</p>
            <p className={styles.text}>{info.height}</p>
            <hr />
          </div>
          <div className={styles.details}>
            <p className={styles.title}>Weight</p>
            <p className={styles.text}>{info.weight}</p>
            <hr />
          </div>
        </div>
        <div className={styles.container_imgshiny}>
          <p className={styles.title}>Shiny</p>
          <div>
            <img src={info.sprites.back_shiny} alt="" width="100px" />
            <img src={info.sprites.front_shiny} alt="" width="100px" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Details;
