import { UserProfile } from '../user/types';

import {
  AuthActionTypes,
  SIGN_FAILURE,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_OUT,
  SIGN_UP_REQUEST,
} from './types';

export function singInRequest(
  email: string,
  password: string,
): AuthActionTypes {
  return {
    type: SIGN_IN_REQUEST,
    payload: { email, password },
  };
}

export function signInSuccess(
  token: string,
  user: UserProfile,
): AuthActionTypes {
  return {
    type: SIGN_IN_SUCCESS,
    payload: { token, user },
  };
}

export function signUpRequest(
  name: string,
  email: string,
  password: string,
): AuthActionTypes {
  return {
    type: SIGN_UP_REQUEST,
    payload: { name, email, password },
  };
}

export function signFailure(): AuthActionTypes {
  return {
    type: SIGN_FAILURE,
  };
}

export function signOut(): AuthActionTypes {
  return {
    type: SIGN_OUT,
  };
}
