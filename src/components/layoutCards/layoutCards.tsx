import React from 'react';
import Card from '../card/card';
import style from './layoutCard.module.scss';

const LayoutCards = () => (
  <div className={style.container_layout}>
    <div className={style.container_item}>
      <Card
        name="Bulbasaur"
        id="001"
        img="https://pokeres.bastionbot.org/images/pokemon/1.png "
        type={[`grass`, `poison`]}
      />
    </div>
    <div className={style.container_item}>
      <Card
        name="Bulbasaur"
        id="001"
        img="https://pokeres.bastionbot.org/images/pokemon/1.png "
        type={[`grass`, `poison`]}
      />
    </div>
    <div className={style.container_item}>
      <Card
        name="Bulbasaur"
        id="001"
        img="https://pokeres.bastionbot.org/images/pokemon/1.png "
        type={[`grass`, `poison`]}
      />
    </div>
    <div className={style.container_item}>
      <Card
        name="Bulbasaur"
        id="001"
        img="https://pokeres.bastionbot.org/images/pokemon/1.png "
        type={[`grass`, `poison`]}
      />
    </div>
    <div className={style.container_item}>
      <Card
        name="Bulbasaur"
        id="001"
        img="https://pokeres.bastionbot.org/images/pokemon/1.png "
        type={[`grass`, `poison`]}
      />
    </div>
    <div className={style.container_item}>
      <Card
        name="Bulbasaur"
        id="001"
        img="https://pokeres.bastionbot.org/images/pokemon/1.png "
        type={[`grass`, `poison`]}
      />
    </div>
    <div className={style.container_item}>
      <Card
        name="Bulbasaur"
        id="001"
        img="https://pokeres.bastionbot.org/images/pokemon/1.png "
        type={[`grass`, `poison`]}
      />
    </div>
  </div>
);

export default LayoutCards;
