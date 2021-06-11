import React, { FC } from 'react';

import styles from './cardimg.module.scss';

interface CardImageProps {
  id: number;
  back: string;
  front: string;
}

const CardImage: FC<CardImageProps> = ({ id, back, front }) => (
  <div className={styles.container_img}>
    <div className={styles.principal_img}>
      <img
        src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png `}
        alt="pokemon"
        width="130px"
        height="130px"
      />
    </div>
    <div className={styles.secundary_img}>
      <img src={back} alt="pokemon" width="80px" />
      <img src={front} alt="pokemon" width="80px" />
    </div>
  </div>
);

export default CardImage;
