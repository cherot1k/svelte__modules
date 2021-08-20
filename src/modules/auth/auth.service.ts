import firebase from 'firebase'
import 'firebase/auth'
export const logout = async () => {
  await firebase.auth().signOut()
  console.log('logged out')
}