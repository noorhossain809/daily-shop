import { AuthAction } from './../actions/authAction';
import { ActionTypes } from "redux/actionTypes";

const authReducer = (
    state : IAuthData | null = null, 
    action : AuthAction 
    ): IAuthData | null => {
    switch(action.type){
        case ActionTypes.LOGIN:
            return action.payload;
        case ActionTypes.LOGOUT:
            return null

        default:
            return state
    }
}
export default authReducer;