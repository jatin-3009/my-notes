import { createStore, Store } from "redux";
import rootReducer from "./reducers/rootReducer";
import { configureStore } from "@reduxjs/toolkit";

export default {
  store: null as ReturnType<typeof configureStore> | null,
  createStore: function (): void {
    if (!this.store) {
      this.store = configureStore({
        reducer: rootReducer,
      });
    }
  },
  getStore: function (): ReturnType<typeof configureStore> {
    if (!this.store) {
      throw new Error(
        "Store has not been initialized. Call createStore() first."
      );
    }

    return this.store;
  },
};
