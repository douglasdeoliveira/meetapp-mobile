import { all } from 'redux-saga/effects';

import auth from './auth/saga';
import user from './user/saga';

export default function* rootSaga() {
  yield all([auth, user]);
}
