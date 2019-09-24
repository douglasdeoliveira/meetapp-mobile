import { Store } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import createStore from './createStore';
import { AuthState } from './modules/auth/types';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import { UserState } from './modules/user/types';
import persistReducers from './persistReducers';

export type ApplicationState = {
  auth: AuthState;
  user: UserState;
};

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleware];

const store: Store<ApplicationState> = createStore(
  persistReducers(rootReducer),
  middlewares,
);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
