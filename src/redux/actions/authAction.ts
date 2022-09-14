import { ActionTypes } from 'redux/actionTypes';

interface loginAction {
    type : ActionTypes.LOGIN,
    payload : IAuthData
}

interface logoutAction {
    type : ActionTypes.LOGOUT
}

export type AuthAction = loginAction | logoutAction;