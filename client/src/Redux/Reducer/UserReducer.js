import { createReducer } from "@reduxjs/toolkit";

const initialValue = {
  isLoading: false,
};

export const UserReducer = createReducer(initialValue, {
  //   -------------------- registration
  loadUserRegistration: (state) => {
    state.isLoading = true;
  },
  userRegistrationFail: (state) => {
    state.isLoading = false;
  },
  registerSuccess: (state) => {
    state.isLoading = false;
  },
  userRegistrationERROR: (state, action) => {
    state.isLoading = false;
    state.ERROR = action;
  },
});
