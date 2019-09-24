/*
 * DATA TYPES
 */
export interface UserProfile {
  id?: number;
  name: string;
  email: string;
  password?: string;
  old_password?: string;
  password_confirmation?: string;
}

/*
 * STATE TYPES
 */
export interface UserState {
  readonly profile: UserProfile;
}

/*
 * ACTIONS TYPES
 */
export const UPDATE_PROFILE_REQUEST = '@user/UPDATE_PROFILE_REQUEST';
export const UPDATE_PROFILE_SUCCESS = '@user/UPDATE_PROFILE_SUCCESS';
export const UPDATE_PROFILE_FAILURE = '@user/UPDATE_PROFILE_FAILURE';

/*
 * ACTIONS
 */
export interface UpdateProfileRequestAction {
  type: typeof UPDATE_PROFILE_REQUEST;
  payload: UserProfile;
}

export interface UpdateProfileSuccessAction {
  type: typeof UPDATE_PROFILE_SUCCESS;
  payload: {
    profile: UserProfile;
  };
}

export interface UpdateProfileFailureAction {
  type: typeof UPDATE_PROFILE_FAILURE;
}

export type UserActionTypes =
  | UpdateProfileRequestAction
  | UpdateProfileSuccessAction
  | UpdateProfileFailureAction;
