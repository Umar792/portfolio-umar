import { createReducer } from "@reduxjs/toolkit";

const initialValue = {
  isLoading: false,
  isAuthanticated: false
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
  // -------------------- login 
  loadUserLogin: (state) => {
    state.isLoading = true;
    state.isAuthanticated = false

  },
  LoadUserLoginFail: (state) => {
    state.isLoading = false;
    state.isAuthanticated = false
  },
  LoadUserLoginSuccess: (state) => {
    state.isLoading = false;
    state.isAuthanticated = true
  },
  LoadUserLoginERROR: (state, action) => {
    state.isLoading = false;
    state.ERROR = action;
    state.isAuthanticated = false
  },
  // ============== get authanticate user 
  loadUserAuthanticate: (state) => {
    state.isLoading = true;
    state.isAuthanticated = false

  },
  LoadUserAuthanticateFail: (state) => {
    state.isLoading = false;
    state.isAuthanticated = false
  },
  LoadUserAuthanticateSuccess: (state) => {
    state.isLoading = false;
    state.isAuthanticated = true
  },
  LoadUserAuthanticateERROR: (state, action) => {
    state.isLoading = false;
    state.ERROR = action;
    state.isAuthanticated = false
  },
});
