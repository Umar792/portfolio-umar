import { configureStore } from "@reduxjs/toolkit";
import { UserReducer } from "./Reducer/UserReducer";

const Store = configureStore({
  reducer: {
    user: UserReducer,
  },
});

export default Store;
