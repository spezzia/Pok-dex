import React, { FC, useState } from 'react';
import { AplicationContextProvider } from './appcontext';

const AppContext: FC = ({ children }) => {
  const [search, setSearch] = useState(``);
  const [items, setItems] = useState<number>(0);
  return (
    <AplicationContextProvider
      value={{
        search,
        setSearch,
        items,
        setItems,
      }}
    >
      {children}
    </AplicationContextProvider>
  );
};

export default AppContext;
