import { createContext, useContext } from 'react';
import { RootStore } from './index';

import { RootStoreType } from '../interface';

export const StoreContext = createContext<RootStoreType>(new RootStore());
export const StoreProvider = StoreContext.Provider;

export const useStores = () => useContext(StoreContext);
