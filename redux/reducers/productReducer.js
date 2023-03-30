//
import *as actionType from '../constants/productConstant'
//3.dispatched value from api reached to action and then it checked if we have all the data(SUCCESS) then it return the data(action.payload) nd goes to Store
export const getProductsReducer = (state={products:[]}, action) => {
  switch (action.type) {
    case actionType.GET_PRODUCTS_SUCCESS:
      return{products:action.payload}
    case actionType.GET_PRODUCTS_FAIL:
      return {error:action.payload}
    default: 
      return state
   }

}