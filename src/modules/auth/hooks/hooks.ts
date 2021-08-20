import firebase from "firebase/app";
import 'firebase/auth'
export const getUser = async (callback: () => void, logout: () => void) =>{
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      callback()
    } else {
      // No user is signed in.
      logout()
    }
  });
}