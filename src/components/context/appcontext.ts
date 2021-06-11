import React from 'react';
import AppContextModel from './models/appcontext';

const AplicationContext = React.createContext<AppContextModel>({
  search: ``,
  setSearch: () => ({}),
  items: 0,
  setItems: () => ({}),
});

export const AplicationContextProvider = AplicationContext.Provider;

export default AplicationContext;
