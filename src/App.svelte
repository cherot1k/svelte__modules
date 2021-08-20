<script lang="ts">
	import {Route} from 'svelte-navigator'
	import {View as Auth} from './modules/auth'
	import UserPage from './modules/user/user.svelte'
	import {createEventDispatcher} from "svelte";

	const dispatch = createEventDispatcher()
</script>

<main>
	<Auth>
		<svelte:fragment slot="private">
			<Route path="/" >
				<UserPage />
			</Route>
		</svelte:fragment>
	</Auth>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

</style>