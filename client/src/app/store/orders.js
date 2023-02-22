import { createSlice } from "@reduxjs/toolkit";
import orderService from "../services/order.service";

const orderSlice = createSlice({
    name: "orders",
    initialState: {
        entities: null,
        errors: null,
        isLoading: false
    },
    reducers: {
        orderCreate: (state) => {
            state.isLoading = true;
        },
        orderCreateSuccess: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        orderCreateFailed: (state, action) => {
            state.errors = action.payload;
            state.isLoading = false;
        }
    }
});

const { reducer: orderReducer, actions } = orderSlice;
const { orderCreate, orderCreateSuccess, orderCreateFailed } = actions;

export const submitOrder = (payload) => async (dispatch) => {
    dispatch(orderCreate());
    try {
        const { data } = await orderService.create(payload);
        dispatch(orderCreateSuccess(data));
    } catch (error) {
        dispatch(orderCreateFailed(error.message));
    }
};

export const updateUserOrders = (payload) => async (dispatch) => {
    dispatch(orderCreate());
    try {
        const { data } = orderService.addOrderToUser(payload);
        dispatch(orderCreateSuccess(data));
    } catch (error) {
        dispatch(orderCreateFailed(error.message));
    }
};

export default orderReducer;
