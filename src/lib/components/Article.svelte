<script lang="ts">
	export let text: string;
	export let heroSmall: string;
	export let heroLarge: string;
	export let title: string;
	export let artistName: string;
	export let artistThumbnail: string;
</script>

<div class="container">
	<picture>
		<source media="(min-width: 1100px)" srcset={heroLarge} />
		<img src={heroSmall} alt="hero" />
	</picture>
	<h1>{title}</h1>
	<h2>{artistName}</h2>
	<img src={artistThumbnail} alt="" />
	<p>{text}</p>
</div>

<style>
	.container {
		margin: 3rem;
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
