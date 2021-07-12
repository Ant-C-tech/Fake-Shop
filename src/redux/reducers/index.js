import { combineReducers } from "redux";
import {
  productReducer,
  selectedProductReducer,
  toggleLoadingReducer,
} from "./productReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  isLoading: toggleLoadingReducer,
});

export default reducers;
