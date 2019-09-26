import AsyncStorage from '@react-native-community/async-storage';
import { AnyAction, Reducer } from 'redux';
import { persistReducer } from 'redux-persist';

export default (reducers: Reducer<any, AnyAction>) => {
  const persistedReducer = persistReducer(
    {
      key: 'meetapp',
      storage: AsyncStorage,
      whitelist: ['auth', 'user'],
    },
    reducers,
  );

  return persistedReducer;
};
