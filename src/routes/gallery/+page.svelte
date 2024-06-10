<script lang="ts">
	import ArticleCard from '$lib/components/ArticleCard.svelte';
	import Header from '$lib/components/Header.svelte';
	import type { Post } from '$lib/utils/types';
	import { onMount } from 'svelte';

	let posts: Post[] = [];
	onMount(async () => {
		posts = await getPosts();
	});

	const getPosts = async () => {
		const res = await fetch('/data.json');
		const data = await res.json();
		return data;
	};
</script>

<Header />
<div class="container">
	{#each posts as post}
		<ArticleCard
			index={1}
			img={post.images.gallery}
			title={post.name}
			artistName={post.artist.name}
			link={post.slug}
		/>
	{/each}
</div>

<style>
	.container {
		margin: 0 auto;
		width: 100%;
		max-width: 600px; /* Adjust as needed */
		padding: 1.5rem;
	}

	@media (min-width: 768px) {
		.container {
			display: grid;
			grid-template-columns: 1fr 1fr; /* One column by default */
			gap: 1.5rem;
			max-width: 700px;
		}
	}

	@media (min-width: 1200px) {
		.container {
			grid-template-columns: 1fr 1fr 1fr;
			max-width: 1000px;
		}
	}
</style>
