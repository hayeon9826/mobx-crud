import { createContext, useContext } from 'react';
import rootStore from './rootStore';
import { RootStoreType } from 'src/interface';

const RootContext = createContext<RootStoreType>(rootStore());
export const RootProvider = RootContext.Provider;

export const useStores = () => useContext(RootContext);
