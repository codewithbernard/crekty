import { FETCH_USER } from "./types";
import * as auth from "../api/auth";

export const signInWithGoogle = () => async dispatch => {
  const user = await auth.signInWithGoogle();
};

export const signOut = () => async dispatch => {
  auth.signOut();
};

export const fetchCurrentUser = () => async dispatch => {
  const user = await auth.fetchCurrentUser();
  if (user) {
    dispatch({
      type: FETCH_USER,
      action: user
    });
  }
};

export const listenForAuthStateChange = (success, error) => async dispatch => {
  auth.listenForAuthStateChange(success, error);
};
