import { Dispatch } from 'react';
import { AuthAction } from 'redux/actions/authAction';
import { ActionTypes } from 'redux/actionTypes';
import AuthService from 'services/AuthService';


export const login = (payload : {email : string, password : string})  => {

    return (dispatch : Dispatch<AuthAction>) => {
        AuthService.login(payload)
        .then((data) => {
            dispatch({
                    type: ActionTypes.LOGIN,
                    payload : data
                })
        })
    }
    // return 
}
