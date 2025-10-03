import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    clearCart: () => [],
  },
});

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    login: (state, action) => action.payload,
    logout: () => null,
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export const { login, logout } = userSlice.actions;

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    user: userSlice.reducer,
  },
});

