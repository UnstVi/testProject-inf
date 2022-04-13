export const actions = {
  GET_ALL_PRODUCT: "GET_ALL_PRODUCT",
  ADD_PRODUCT: "ADD_PRODUCT",
  REMOVE_PRODUCT: "REMOVE_PRODUCT",
  UPDATE_PRODUCT: "UPDATE_PRODUCT",
};

export const getAllProduct = (payload) => ({ type: actions.GET_ALL_PRODUCT, payload });
export const addProduct = (payload) => ({ type: actions.ADD_PRODUCT, payload });
export const updateProduct = (payload) => ({ type: actions.ADD_PRODUCT, payload });
export const removeProduct = (payload) => ({ type: actions.ADD_PRODUCT, payload });
