import React, { FC, useState } from 'react';
import { AplicationContextProvider } from './appcontext';

const AppContext: FC = ({ children }) => {
  const [search, setSearch] = useState(``);
  return (
    <AplicationContextProvider
      value={{
        search,
        setSearch,
      }}
    >
      {children}
    </AplicationContextProvider>
  );
};

export default AppContext;
