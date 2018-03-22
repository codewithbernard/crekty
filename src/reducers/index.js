import { combineReducers } from "redux";
import nav from "./navReducer";
import auth from "./authReducer";
import contacts from "./contactsReducer";

const AppReducer = combineReducers({
  nav,
  auth,
  contacts
});

export default AppReducer;
