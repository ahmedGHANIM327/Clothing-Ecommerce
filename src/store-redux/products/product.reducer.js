import { PRODUCT_ACTION_TYPES } from "./product.types";

const INITIAL_STATE = {
    productsMap: [],
};

export const productsReducer = (state=INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case PRODUCT_ACTION_TYPES.SET_PRODUCTS_MAP:
            return { ...state, productsMap: payload };
        default:
            return state;
    }
};