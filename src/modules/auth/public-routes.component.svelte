<script lang="ts">
  import { Route, Link} from "svelte-navigator";
  import Registration from './pages/registration/registration.svelte'
  import Verification from './pages/verification/verification.svelte'
</script>

<div>
  <Route path="login" >
    <Registration/>
  </Route>
  <Route path="verification">
    <Verification/>
  </Route>
  <Route path="/">
    <div>Hello, <span > human </span> </div>
    <Link to="login">  Sign in </Link>
  </Route>
</div>
