import React, { FC, useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import Card from '../card/card';
import style from './layoutCard.module.scss';
import AplicationContext from '../context/appcontext';

interface ResultInterface {
  name: string;
  url: string;
}
interface PokeInterface {
  results: ResultInterface[];
}

interface LayoutCardsnterface {
  pokemon: PokeInterface;
}

const LayoutCards: FC<LayoutCardsnterface> = ({ pokemon }) => {
  const [items, setitems] = useState<number>(0);
  const [pokemos, setPokemos] = useState<PokeInterface>({ results: [] });
  const AppContext = useContext(AplicationContext);

  useEffect(() => {
    setPokemos(pokemon);
  }, []);
  useEffect(() => {
    if (AppContext.search.length === 0) {
      setPokemos(pokemon);
    } else if (/^\d+$/.test(AppContext.search)) {
      const aux: PokeInterface = {
        results: pokemon.results.filter((i, index) =>
          (index + 1).toString().includes(AppContext.search),
        ),
      };
      setPokemos(aux);
    } else {
      const aux: PokeInterface = {
        results: pokemon.results.filter((i) =>
          i.name.includes(AppContext.search),
        ),
      };
      setPokemos(aux);
    }
  }, [AppContext.search]);
  return (
    <div>
      <div className={style.container_layout}>
        {pokemos.results.slice(items, items + 10).map((item) => (
          <div className={style.container_item} key={item.name}>
            <Card
              url={item.url}
              // id={item.id}
              // img={`https://pokeres.bastionbot.org/images/pokemon/${item.id}.png `}
              // type={item.types}
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
