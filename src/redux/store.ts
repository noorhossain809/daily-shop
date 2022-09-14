import { combineReducers, createStore, applyMiddleware  } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import CartReducer from "./reducer/cartReducer"
import ReduxThunk from 'redux-thunk'
import auth from "./reducer/authReducer"

const rootReducer = combineReducers({
    cart: CartReducer,
    auth
})

const middleware = applyMiddleware(ReduxThunk)

const store = createStore(rootReducer, composeWithDevTools(middleware))

export type AppState = ReturnType<typeof rootReducer>

export default store;