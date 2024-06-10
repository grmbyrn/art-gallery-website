<script lang="ts">
	import { onMount } from 'svelte';
	import Modal from './Modal.svelte';
	export let text: string;
	export let heroSmall: string;
	export let heroLarge: string;
	export let title: string;
	export let artistName: string;
	export let artistThumbnail: string;
	export let source: string;
	export let year: number;
	import PrevNext from './PrevNext.svelte';

	let showModal = false;
	let fetchedSlugs: string[] = [];

	function openModal() {
		showModal = true;
	}

	function onClose() {
		showModal = false;
	}

	onMount(async () => {
		try {
			const response = await fetch('/data.json');
			const data = await response.json();
			fetchedSlugs = data.map((item: any) => item.slug);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	});
</script>

<div class="container" style="--year: '{year}'">
	<div class="large-screen-container">
		<div class="painting-container">
			<button on:click={openModal}
				><img src="assets/artists/shared/icon-view-image.svg" alt="painting" />View Image</button
			>
			<picture>
				<source media="(min-width: 1200px)" srcset={heroLarge} />
				<img src={heroSmall} alt="hero" />
			</picture>
			<div class="text-container">
				<div>
					<h1>{title}</h1>
					<h2>{artistName}</h2>
				</div>
				<img src={artistThumbnail} class="artist-thumbnail" alt="Artist thumbnail" />
			</div>
		</div>
	</div>
	<div class="info-container">
		<p>{text}</p>
		<div class="links">
			<a href={source} target="_blank">Go to source</a>
			<a href="/gallery">Back to gallery</a>
		</div>
	</div>
</div>

<PrevNext {title} {artistName} {fetchedSlugs} />

<Modal {showModal} {onClose} imageSrc={heroLarge} />

<style>
	.container {
		--year: 'Default Year';
		margin: 3rem;
		margin: 0 auto;
		padding-inline: 1.5rem;
	}

	button {
		position: absolute;
		display: flex;
		gap: 14px;
		align-items: center;
		margin-top: 2rem;
		margin-left: 14px;
		padding: 14px 1rem;
		z-index: 1000;
		background-color: #000000;
		opacity: 0.8;
		border: none;
		font-family: 'Libre Baskerville', serif;
		text-transform: uppercase;
		color: #ffffff;
		font-size: 10px;
		letter-spacing: 2.14px;
		cursor: pointer;
	}

	picture {
		position: relative;
	}

	.text-container {
		position: absolute;
		margin-top: -5rem;
		width: 280px;
		padding-top: 0;
	}

	.text-container div {
		background-color: #ffffff;
		padding: 1.5rem;
	}

	.artist-thumbnail {
		height: 64px;
		width: 64px;
		margin-left: 1rem;
	}

	h1,
	h2,
	p,
	a {
		font-family: 'Libre Baskerville', serif;
	}

	h1,
	h2 {
		text-transform: none;
	}

	h1 {
		font-size: 1.5rem;
		line-height: 28px;
		background-color: #ffffff;
	}

	h2 {
		font-size: 15px;
		color: #7d7d7d;
		font-weight: 100;
		background-color: #ffffff;
	}

	.info-container {
		margin-bottom: 67px;
		margin-top: 9rem;
	}

	p {
		position: relative;
		font-size: 14px;
		line-height: 28px;
		color: #7d7d7d;
		padding-bottom: 68px;
	}

	p::before {
		content: var(--year); /* The background text */
		position: absolute; /* Position it absolutely relative to the p element */
		top: -10%; /* Center it vertically */
		left: 70%; /* Center it horizontally */
		transform: translate(-50%, -50%); /* Adjust the centering */
		font-size: 100px; /* Adjust the font size as needed */
		color: rgba(0, 0, 0, 0.1); /* Light grey color with some transparency */
		z-index: -1; /* Ensure it is behind the main text */
		pointer-events: none; /* Ensure it doesn't interfere with user interactions */
	}

	.links {
		display: flex;
		justify-content: space-between;
	}

	a {
		font-size: 9px;
		font-weight: bold;
		letter-spacing: 1.93px;
		color: #7d7d7d;
		text-transform: uppercase;
	}

	a:hover {
		color: #d5966c;
	}

	@media (min-width: 768px) {
		.container {
			width: 48rem;
		}

		button {
			margin-top: 21.5rem;
		}

		.painting-container {
			display: flex;
			width: 475px;
		}

		.text-container {
			display: flex;
			flex-direction: column;
			align-items: flex-end;
			margin-top: 0rem;
			margin-left: 14rem;
			width: 445px;
			padding: 0rem;
			padding-left: 65px;
			padding-top: 0;
			padding-bottom: 65px;
		}

		.artist-thumbnail {
			height: 128px;
			width: 128px;
		}

		h1 {
			font-size: 56px;
			line-height: 4rem;
			margin-top: -1.5rem;
		}

		.info-container {
			margin-top: 139px;
			margin-bottom: 53px;
			margin-inline: 115px 61px;
		}

		p::before {
			top: 0%; /* Center it vertically */
			left: 20%; /* Center it horizontally */
			font-size: 200px; /* Adjust the font size as needed */
		}
	}

	@media only screen and (min-width: 1200px) {
		.container {
			width: 79.6875rem;
			display: flex;
			justify-content: space-between;
			margin-bottom: 100px;
		}

		button {
			margin-top: 31rem;
		}

		.large-screen-container {
			flex: 1.5;
		}

		.text-container {
			margin-left: 12rem;
			padding: 0rem;
			padding-left: 65px;
			padding-top: 0;
			padding-bottom: 65px;
		}

		.artist-thumbnail {
			margin-top: 18rem;
		}

		.info-container {
			flex: 1;
			width: 350px;
			margin-left: 0;
		}

		p::before {
			left: 50%; /* Center it horizontally */
		}
	}
</style>
