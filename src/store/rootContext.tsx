import { createContext, useContext } from 'react';
import { RootStore } from './rootStore';
import { RootStoreType } from 'src/interface';

const RootContext = createContext<RootStoreType>(new RootStore());
export const RootProvider = RootContext.Provider;

export const useStores = () => useContext(RootContext);
