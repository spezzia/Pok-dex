import React from 'react';
import AppContextModel from './models/appcontext';

const AplicationContext = React.createContext<AppContextModel>({
  search: ``,
  setSearch: () => ({}),
});

export const AplicationContextProvider = AplicationContext.Provider;

export default AplicationContext;
