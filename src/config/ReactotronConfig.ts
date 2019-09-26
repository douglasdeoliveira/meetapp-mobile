import AsyncStorage from '@react-native-community/async-storage';
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if (__DEV__) {
  const tron = Reactotron.setAsyncStorageHandler!(AsyncStorage)
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga({}))
    .connect();

  if (tron.clear) {
    tron.clear();
  }

  console.tron = tron;
}
