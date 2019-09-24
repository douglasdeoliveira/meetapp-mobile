import produce from 'immer';

import { AuthActionTypes, SIGN_IN_SUCCESS, SIGN_OUT } from '../auth/types';

import { UPDATE_PROFILE_SUCCESS, UserActionTypes, UserState } from './types';

const INITIAL_STATE: UserState = {
  profile: { name: '', email: '' },
};

export default function user(
  state = INITIAL_STATE,
  action: UserActionTypes | AuthActionTypes,
) {
  return produce(state, draft => {
    switch (action.type) {
      case SIGN_IN_SUCCESS: {
        draft.profile = action.payload.user;
        break;
      }
      case UPDATE_PROFILE_SUCCESS: {
        draft.profile = action.payload.profile;
        break;
      }
      case SIGN_OUT: {
        draft = INITIAL_STATE;
        break;
      }
      default:
    }
  });
}
