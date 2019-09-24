import { ApplicationState } from 'store';

import { UserProfile } from '../user/types';

/*
 * DATA TYPES
 */
export interface Session {
  token: string;
  user: UserProfile;
}

/*
 * STATE TYPES
 */
export interface AuthState {
  readonly token: string | null;
  readonly signed: boolean;
  readonly loading: boolean;
}

/*
 * ACTIONS TYPES
 */
export const SIGN_IN_REQUEST = '@auth/SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = '@auth/SIGN_IN_SUCCESS';
export const SIGN_UP_REQUEST = '@auth/SIGN_UP_REQUEST';
export const SIGN_FAILURE = '@auth/SIGN_FAILURE';
export const SIGN_OUT = '@auth/SIGN_OUT';
export const REHYDRATE = 'persist/REHYDRATE';

/*
 * ACTIONS
 */
export interface SignInRequestAction {
  type: typeof SIGN_IN_REQUEST;
  payload: {
    email: string;
    password: string;
  };
}

export interface SignInSuccessAction {
  type: typeof SIGN_IN_SUCCESS;
  payload: Session;
}

export interface SignUpRequestAction {
  type: typeof SIGN_UP_REQUEST;
  payload: {
    name: string;
    email: string;
    password: string;
  };
}

interface SignFailureAction {
  type: typeof SIGN_FAILURE;
}

interface SignOutAction {
  type: typeof SIGN_OUT;
}

export interface RehydrateAction {
  type: typeof REHYDRATE;
  payload: ApplicationState;
}

export type AuthActionTypes =
  | SignInRequestAction
  | SignInSuccessAction
  | SignUpRequestAction
  | SignFailureAction
  | SignOutAction;
