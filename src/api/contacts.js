import { database } from "../config/firebase";

const contacts = database.ref("contacts");

export const createContact = async newContact => {
  const newContactRef = contacts.push();
  newContactRef.set(newContact);
};

export const fetchContacts = () => async dispatch => {
  contacts.on("value", snapshot => {
    dispatch({
      type: FETCH_USERS,
      action: snapshot.val()
    });
  });
};

export const deleteContact = contactId => {
  const contactRef = contacts.child(contactId);
  contactRef.remove();
};

export const updateContact = (contactId, newContact) => {
  const contactRef = contacts.ref(contactId);
  contactRef.set(newContact);
};
