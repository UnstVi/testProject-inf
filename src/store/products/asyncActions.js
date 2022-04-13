import ApiService from "../../services/ApiService";
import { getAllProduct, addProduct, updateProduct, removeProduct } from "./actions";

export const fetchProducts = () => {
  return (dispatch) => {
    ApiService.getProducts().then(products => dispatch(getAllProduct(products)));
  };
};

export const createProduct = (product) => {
  return (dispatch) => {
    ApiService.addProduct(product).then(product => dispatch(addProduct(product)));
  };
};

export const editProduct = (product) => {
  return (dispatch) => {
    ApiService.editProduct(product).then(product => dispatch(updateProduct(product)));
  };
};

export const deleteProduct = (product) => {
  return (dispatch) => {
    ApiService.deleteProduct(product).then(product => dispatch(removeProduct(product)));
  };
};



