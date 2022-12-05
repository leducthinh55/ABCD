import cartReducer from './slice/cartSlice';

import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;
