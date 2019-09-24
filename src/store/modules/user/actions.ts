import {
  UPDATE_PROFILE_FAILURE,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UserProfile,
} from './types';

export function updateProfileRequest(profile: UserProfile) {
  return {
    type: UPDATE_PROFILE_REQUEST,
    payload: profile,
  };
}

export function updateProfileSuccess(profile: UserProfile) {
  return {
    type: UPDATE_PROFILE_SUCCESS,
    payload: { profile },
  };
}

export function updateProfileFailure() {
  return {
    type: UPDATE_PROFILE_FAILURE,
  };
}
