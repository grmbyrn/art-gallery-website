<script lang="ts">
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<h1>Register</h1>

<form action="?/register" method="POST">
	<div>
		<label for="username">Username</label>
		<input type="text" id="username" name="username" required />
	</div>

	<div>
		<label for="username">Password</label>
		<input type="password" id="password" name="password" required />
	</div>

	{#if form?.user}
		<p class="error">Username is taken</p>
	{/if}

	<button type="submit">Register</button>
</form>
