import { applyMiddleware, combineReducers, createStore } from "redux";
import { productReducer } from "./products/productReducer";
import { customerReducer } from "./products/customerReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    product: productReducer,
})


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));