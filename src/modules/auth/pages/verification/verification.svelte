<script lang="ts">
  import Input from '../../components/ui/input.svelte'
  import firebase from "firebase/app"
  import 'firebase/auth'
  import {firebaseConfig} from "../../config"
  import { onMount} from "svelte"
  import {confirmationResult, auth} from '../../store.js'
  import {useNavigate} from "svelte-navigator"

  const history = useNavigate()
  let result:any

  confirmationResult.subscribe(value =>{
      if(value === undefined) return history('/registration')
      result = value
    }
  )

  let code:string = ''
  let recaptcha:any

  onMount(async () => {
    if(firebase.app.length < 1) await firebase.initializeApp(firebaseConfig)
    recaptcha = new firebase.auth.RecaptchaVerifier('captcha',{
      'size': 'invisible'
    })
  })

  const submitForm = async (e):Promise<void> => {
    e.preventDefault()
    e.stopPropagation()
    const user = await result.confirm(code)
    if(user) auth.set(true)
    history('/')
  }
</script>

<form on:submit={submitForm} id="recaptcha-container">
  <Input type={'phone'} bind:value={code} labelTitle=Code />
  <button type=submit > Submit </button>
  <div id="captcha"></div>
</form>
