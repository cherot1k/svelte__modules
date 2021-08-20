<script lang="ts">
  import Input from '../../components/ui/input.svelte';
  import firebase from "firebase/app";
  import 'firebase/auth';
  import {firebaseConfig} from "../../config";
  import {onMount} from "svelte";
  import {confirmationResult} from '../../store.js'
  import {useNavigate} from "svelte-navigator";

  let phone:string = ''
  let recaptcha
  let history = useNavigate()
  onMount(async ()=>{
    if(firebase.app.length === 0) await firebase.initializeApp(firebaseConfig)
    recaptcha = new firebase.auth.RecaptchaVerifier('hello',{
      'size': 'invisible'
    })
  })

  const submitForm = async (e) :Promise<void> => {
    e.preventDefault()
    e.stopPropagation()
    const result = await firebase.auth().signInWithPhoneNumber(phone, recaptcha)
    confirmationResult.set(result)
    history('/verification')
  }
</script>

<form on:submit={submitForm} id="recaptcha-container">
  <div> Enter your phone number </div>
  <Input type=tel  bind:value={phone} labelTitle=Email />
  <button type=submit > Submit </button>
  <div id="hello"></div>
</form>

<style>

</style>