<script lang="ts">
  import { Router} from "svelte-navigator"
  import {onMount, setContext} from "svelte"
  import {getUser} from "./hooks/hooks"
  import PublicRoutes from './public-routes.component.svelte'
  import firebase from 'firebase/app'
  import 'firebase/auth'
  import {firebaseConfig} from "./config"
  import {auth as authBool} from './store.ts'
  import {logout} from "./auth.service";
  let auth:boolean = false

  authBool.subscribe(value => auth = value)

  $: console.log(auth)
  onMount(async () => {
    await firebase.initializeApp(firebaseConfig)
    const callback = ()=>{
      authBool.set(true)
    }
    await getUser(callback,logout)
  })



  let logoutUser = async () => {
    console.log('called')
    await logout()
    authBool.set(false)
  }

  setContext('logout', {logoutUser})

</script>

<Router >
  {#if auth}
      <slot name="private"> </slot>
    {:else}
    <PublicRoutes/>
  {/if}
</Router>


