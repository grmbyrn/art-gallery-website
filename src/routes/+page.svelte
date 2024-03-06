<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Gallery from '$lib/components/Gallery.svelte';
	import GalleryInspired from '$lib/components/GalleryInspired.svelte';
	import Hero from '$lib/components/Hero.svelte';
</script>

<div class="container">
	<Hero />
	<div class="gallery-container">
		<Gallery />
		<GalleryInspired />
	</div>
	<Footer />
</div>

<style>
	.container {
		width: 23.438rem;
		background-color: #ffffff;
		display: block;
		margin-left: auto;
		margin-right: auto;
	}

	.gallery-container {
		margin-top: 7.5rem;
		margin-inline: 1rem;
	}

	@media (min-width: 768px) {
		.container {
			width: 48rem;
		}
	}

	@media only screen and (min-width: 1200px) {
		.container {
			width: 79.6875rem;
		}
	}
</style>
