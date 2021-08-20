<script >
import {getContext} from "svelte";
import firebase from "firebase/app";
import 'firebase/auth'
 let {logoutUser} = getContext('logout')
 let logout = () => {
  if(logoutUser){
   logoutUser()
  }
 }

 const user = firebase.auth().currentUser
 console.log(user)
</script>

<div>
 <div>
  This is private page
 </div>
 <div>
  <button on:click={ logout}>Logout</button>
 </div>
</div>