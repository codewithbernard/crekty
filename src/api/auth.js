import { firebaseAuth } from "../config/firebase";
import Expo from "expo";

export const signInWithGoogle = async () => {
  try {
    const result = await Expo.Google.logInAsync({
      androidClientId:
        "1012179463295-devesn04827elfoc90snqegg3hnq85cd.apps.googleusercontent.com",
      scopes: ["profile"]
    });
    const { idToken, accessToken } = result;
    const credential = firebaseAuth.GoogleAuthProvider.credential(
      idToken,
      accessToken
    );
    const user = await firebaseAuth().signInWithCredential(credential);
    return user;
  } catch (e) {
    console.log(e);
  }
};

export const signOut = () => {
  try {
    firebaseAuth().signOut();
  } catch (e) {
    console.log(e);
  }
};

export const fetchCurrentUser = async () => {
  try {
    const user = await firebaseAuth().currentUser;
    return user;
  } catch (error) {
    console.log(error);
  }
};

export const setLocalPersistence = async () => {
  try {
    const persistence = await firebaseAuth().setPersistence(
      firebaseAuth.Auth.Persistence.LOCAL
    );
    return persistence;
  } catch (e) {
    console.log(error);
  }
};

export const listenForAuthStateChange = (success, error) => {
  firebaseAuth().onAuthStateChanged(user => {
    if (user) {
      success();
    } else {
      error();
    }
  });
};
