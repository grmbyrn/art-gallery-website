<script lang="ts">
	import { page } from '$app/stores';

	export let btnText = '';
	export let slug = '';
</script>

<div class="button-container">
	{#if $page.url.pathname === '/'}
		<button><a href={slug}>{btnText}</a></button>
		<a href={slug}><img src="./assets/icon-arrow-right.svg" class="arrow" alt="arrow right" /></a>
	{:else if $page.url.pathname === '/location'}
		<a href="/"><img src="./assets/icon-arrow-left.svg" class="arrow" alt="arrow left" /></a>
		<button><a href={slug}>{btnText}</a></button>
	{/if}
</div>

<style>
	.button-container {
		display: flex;
		height: 4.5rem;
	}

	button {
		font-family: 'Big Shoulders Display', sans-serif;
		font-optical-sizing: auto;
		font-weight: bold;
		font-style: normal;
		font-size: 1.25rem;
		text-transform: uppercase;
		background-color: #151515;
		color: #ffffff;
		padding-inline: 2rem;
		letter-spacing: 3.64px;
		border: none;
	}

	button a {
		color: #ffffff;
		text-decoration: none;
	}

	.arrow {
		background-color: #d5966c;
		height: 100%;
		padding: 24px 14px;
	}

	.button-container:hover button {
		background-color: #d5966c;
		cursor: pointer;
	}

	.button-container:hover .arrow {
		background-color: #151515;
		cursor: pointer;
	}
</style>
