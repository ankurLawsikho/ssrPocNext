import { configureStore } from '@reduxjs/toolkit';

import uiSlice from './ui-slice';
import cartSlice from './cart-slice';
import modalSlice from './modal-slice';

const store = configureStore({
    reducer: { 
        ui: uiSlice.reducer,
        cart: cartSlice.reducer,
        modal: modalSlice.reducer  
    },
});

export default store;