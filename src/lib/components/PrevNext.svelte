<script lang="ts">
	export let title: string;
	export let artistName: string;
	export let fetchedSlugs: string[];

	import { page } from '$app/stores';
	$page.url.pathname;
</script>

<div class="prevNextContainer">
	<div>
		<h3>{title}</h3>
		<h4>{artistName}</h4>
	</div>
	<div class="prevNextBtns">
		{#each fetchedSlugs as fetchedSlug, i}
			{#if fetchedSlug === $page.url.pathname}
				<a href={fetchedSlugs[i - 1]}>
					<img src="assets/artists/shared/icon-back-button.svg" alt="back" />
				</a>
			{/if}
		{/each}
		{#each fetchedSlugs as fetchedSlug, i}
			{#if fetchedSlug === $page.url.pathname}
				<a href={fetchedSlugs[i + 1]}>
					<img src="assets/artists/shared/icon-next-button.svg" alt="back" />
				</a>
			{/if}
		{/each}
	</div>
</div>

<style>
	h3,
	h4,
	a {
		font-family: 'Libre Baskerville', serif;
	}

	h3,
	h4 {
		text-transform: none;
	}

	h3 {
		font-size: 14px;
	}

	h4 {
		font-size: 10px;
		font-weight: normal;
		color: #7d7d7d;
	}

	.prevNextContainer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-inline: 1.5rem;
		margin-bottom: 1rem;
		border-top: 1px solid #979797;
		padding-block: 1rem;
	}

	.prevNextBtns {
		display: flex;
		gap: 1.5rem;
	}

	@media (min-width: 768px) {
		.prevNextContainer {
			padding-inline: 2rem;
		}

		.prevNextContainer h3 {
			font-size: 18px;
		}

		.prevNextContainer h4 {
			font-size: 13px;
		}
	}

	@media only screen and (min-width: 1200px) {
		.prevNextContainer {
			padding-inline: 5rem;
		}
	}
</style>
