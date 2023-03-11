import { createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE = {
    productsMap: [],
};

export const productSlice = createSlice({
    'name':'product',
    'initialState' : INITIAL_STATE,
    reducers: {
        //Actions
        setProductsMap(state,action) {
            state.productsMap = action.payload
        }
    }

})

export const productsReducer = productSlice.reducer

export const {setProductsMap} = productSlice.actions