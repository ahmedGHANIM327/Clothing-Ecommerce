import { createAction } from "../../utils/reducer/reducer";
import { PRODUCT_ACTION_TYPES } from "./product.types";

export const setProductsMap = (productsMap) => createAction(PRODUCT_ACTION_TYPES.SET_PRODUCTS_MAP,productsMap );