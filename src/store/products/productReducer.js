import { actions } from "./actions"

const defaultState = {
    productList: [],
}

export const productReducer = (state = defaultState, action) => {
    switch(action.type){
      case actions.GET_ALL_PRODUCT:
        return{...state, productList: action.payload}

      case actions.ADD_PRODUCT:
        return{...state, productList: [...state.productList, action.payload]}

        case actions.REMOVE_PRODUCT:
          return{...state, productList: state.productList.filter(product => product.id !== action.payload.id)}

        case actions.UPDATE_PRODUCT:
          return{...state, productList: [...state.productList[state.productList.indexOf(action.payload.id)] = action.payload]}
  
       default: 
       return state;
    }
  }