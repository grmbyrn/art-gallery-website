<script lang="ts">
	import ArticleCard from '$lib/components/ArticleCard.svelte';
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

<div class="grid">
	{#each posts as post, i}
		<ArticleCard
			index={i}
			img={post.images.gallery}
			title={post.name}
			artistName={post.artist.name}
			link={'/starry-night'}
		/>
	{/each}
</div>

<style>
	.container {
	}

	@media screen and (min-width: 768px) {
		.container {
			display: grid;
			grid-template-columns: repeat(
				auto-fill,
				minmax(250px, 1fr)
			); /* Adjust minmax values as needed */
			gap: 20px;
		}
	}
</style>
