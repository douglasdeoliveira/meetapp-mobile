import produce from 'immer';

import {
  AuthActionTypes,
  AuthState,
  REFRESH_TOKEN,
  SIGN_FAILURE,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_OUT,
} from './types';

const INITIAL_STATE: AuthState = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action: AuthActionTypes) {
  return produce(state, draft => {
    switch (action.type) {
      case SIGN_IN_REQUEST: {
        draft.loading = true;
        break;
      }

      case SIGN_IN_SUCCESS: {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        break;
      }

      case SIGN_FAILURE: {
        draft.loading = false;
        break;
      }

      case REFRESH_TOKEN: {
        draft.token = action.payload.token;
        break;
      }

      case SIGN_OUT: {
        draft.token = null;
        draft.signed = false;
        break;
      }

      default:
    }
  });
}
