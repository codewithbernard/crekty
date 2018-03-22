import { FETCH_USER, FETCH_USERS } from "./types";
import * as auth from "../api/auth";
import * as contacts from "../api/contacts";
import { database } from "../config/firebase";

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
      payload: user
    });
  }
};

export const listenForAuthStateChange = (success, error) => async dispatch => {
  auth.listenForAuthStateChange(success, error);
};

// Contacts
export const addContact = (user, number) => async dispatch => {
  contacts.createContact({ user, number });
};

export const fetchContacts = () => async dispatch => {
  database.ref("contacts").on("value", snapshot => {
    dispatch({
      type: FETCH_USERS,
      payload: snapshot.val()
    });
  });
};

export const removeContact = contactId => async dispatch => {
  contacts.deleteContact(contactId);
};
