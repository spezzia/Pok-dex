import Pokemon from '@/models/pokemon';
import React, { FC, useState } from 'react';
import Image from 'next/image';
import Card from '../card/card';
import style from './layoutCard.module.scss';

interface LayoutCardsnterface {
  pokemon: Pokemon[];
}

const LayoutCards: FC<LayoutCardsnterface> = ({ pokemon }) => {
  const [items, setitems] = useState<number>(0);
  return (
    <div>
      <div className={style.container_layout}>
        {pokemon.slice(items, items + 10).map((item) => (
          <div className={style.container_item} key={item.id}>
            <Card
              name={item.name}
              id={item.id}
              img={`https://pokeres.bastionbot.org/images/pokemon/${item.id}.png `}
              type={item.types}
            />
          </div>
        ))}
      </div>
      <div className={style.container_pagination}>
        <p>
          <button
            type="button"
            onClick={() => {
              if (items - 10 >= 0) setitems(items - 10);
            }}
          >
            <Image
              className={items - 10 < 0 ? style.disable : ``}
              src="/assets/Icons/Prev.svg"
              alt="icon prev"
              width="30px"
              height="30px"
            />
          </button>
          <button
            type="button"
            onClick={() => {
              if (items + 10 <= 151) setitems(items + 10);
            }}
          >
            <Image
              className={items + 10 > 151 ? style.disable : ``}
              src="/assets/Icons/Next.svg"
              alt="icon next"
              width="30px"
              height="30px"
            />
          </button>
        </p>
      </div>
    </div>
  );
};
export default LayoutCards;
