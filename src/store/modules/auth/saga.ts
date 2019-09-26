import { showMessage } from 'react-native-flash-message';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';
import NavigationService from '~/services/navigation';

import { signFailure, signInSuccess } from './actions';
import {
  REHYDRATE,
  RehydrateAction,
  SIGN_IN_REQUEST,
  SIGN_UP_REQUEST,
  SignInRequestAction,
  SignUpRequestAction,
} from './types';

export function* signIn({ payload }: SignInRequestAction) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));
  } catch (error) {
    showMessage({
      message: 'Falha na autenticação',
      description: 'Houve um erro no login, verifique seus dados',
      type: 'danger',
    });
    yield put(signFailure());
  }
}

export function* signUp({ payload }: SignUpRequestAction) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', { name, email, password });

    showMessage({
      message: 'Parabéns!',
      description: 'Usuário cadastrado com sucesso',
      type: 'success',
    });

    NavigationService.navigate('SignIn');
  } catch (error) {
    showMessage({
      message: 'Falha no cadastro',
      description: 'Houve um erro no cadastro',
      type: 'danger',
    });
    yield put(signFailure());
  }
}

export function setToken({ payload }: RehydrateAction) {
  if (!payload) {
    return;
  }

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest(REHYDRATE, setToken),
  takeLatest(SIGN_IN_REQUEST, signIn),
  takeLatest(SIGN_UP_REQUEST, signUp),
]);
