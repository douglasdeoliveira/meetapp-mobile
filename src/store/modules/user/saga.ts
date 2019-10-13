import { showMessage } from 'react-native-flash-message';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';

import { updateProfileFailure, updateProfileSuccess } from './actions';
import { UPDATE_PROFILE_REQUEST, UpdateProfileRequestAction } from './types';

export function* updateProfile({ payload }: UpdateProfileRequestAction) {
  try {
    const { name, email, ...rest } = payload;

    const profile = {
      name,
      email,
      ...(rest.old_password !== '' ? rest : {}),
    };

    const response = yield call(api.put, 'users', profile);

    showMessage({
      message: 'Perfil atualizado com sucesso',
      type: 'success',
    });

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    showMessage({
      message: 'Houve um erro na atualização do perfil',
      type: 'danger',
    });
    yield put(updateProfileFailure());
  }
}
export default all([takeLatest(UPDATE_PROFILE_REQUEST, updateProfile)]);
