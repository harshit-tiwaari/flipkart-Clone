import { createStore ,combineReducers,applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import { getProductsReducer } from './reducers/productReducer';
import thunk from 'redux-thunk'
const middleware = [thunk]
const reducer = combineReducers({
  getProducts: getProductsReducer //4.Value will get stored in getProduct and then we use Useselector(at home) to get the fetch values 
})
const store = createStore(
  //now we have many reducers so we need to combine them so as to store it
  reducer ,
     composeWithDevTools(applyMiddleware(...middleware))//second argument is a middleware using thunk middleware,here ...is rest operator.
)

export default store
