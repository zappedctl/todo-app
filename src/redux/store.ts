import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer, {RootState} from './rootReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer<RootState, any>(persistConfig, rootReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export default store;
export { persistor };
