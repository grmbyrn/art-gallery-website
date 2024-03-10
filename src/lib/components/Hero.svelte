<script>
	import Button from './Button.svelte';
</script>

<div class="hero-container">
	<div class="hero-lg">
		<div class="hero-container-dark"></div>
		<picture>
			<source media="(min-width: 1100px)" srcset="./assets/desktop/image-hero.jpg" />
			<source media="(min-width: 481px)" srcset="./assets/desktop/image-hero.jpg" />
			<img class="product__image2" src="./assets/mobile/image-hero.jpg" alt="visiting gallery" />
		</picture>
		<div class="hero-container-white"></div>
	</div>
	<div class="hero-container-item item-text">
		<div class="inner-grid">
			<div class="inner-flex">
				<h1>Modern <br />Art Gallery</h1>
				<p>
					The arts in the collection of the Modern Art Gallery all started from a spark of
					inspiration. Will these pieces inspire you? Visit us and find out.
				</p>
			</div>
			<div class="button-container">
				<Button />
			</div>
		</div>
	</div>
</div>

<style>
	.hero-image {
		width: 100%;
		height: 15rem;
		background-size: cover;
		background-position: center;
	}

	h1 {
		font-optical-sizing: auto;
		font-weight: 900;
		font-style: normal;
		color: #151515;
		text-transform: uppercase;
	}

	p {
		font-size: 1.125rem;
		color: #444444;
		line-height: 1.75rem;
	}

	.button-container {
		margin-top: 2rem;
	}

	/* Mobile devices (screens below 768px) */
	@media only screen and (max-width: 767px) {
		.hero-image {
			display: block;
		}

		.item-text {
			padding: 0rem 1rem 0 1rem;
		}

		h1 {
			font-size: 3.75rem;
		}
	}

	/* Tablets (screens below 1200px) */
	@media only screen and (min-width: 768px) and (max-width: 1199px) {
		.hero-image {
			height: 43.75rem;
			width: 27.3125rem;
		}

		h1 {
			font-size: 4.375rem;
		}
	}

	@media only screen and (min-width: 768px) {
		.hero-container {
			display: flex;
		}

		.hero-container-item {
			flex: 1;
		}

		.item-text {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
			position: relative;
			right: 30px;
		}
	}

	/* Desktops (screens 1200px and above) */
	@media only screen and (min-width: 1200px) {
		.hero-container {
			display: block;
		}

		.hero-lg {
			display: flex;
		}

		.hero-container-dark {
			display: block;
			background-color: #151515;
			width: 28.125rem;
		}

		.hero-container-white {
			display: block;
			background-color: #ffffff;
			width: 28.125rem;
		}

		.hero-image {
			background-image: url('./assets/desktop/image-hero.jpg');
			height: 50rem;
			width: 33.75rem;
		}

		.item-text {
			position: relative;
			width: 100%;
			height: 0;
			padding-inline: 165px;
		}

		.inner-grid {
			position: absolute;
			left: 150px;
			bottom: 120px;
			display: grid;
			grid-template-columns: 3fr 2fr;
			grid-template-rows: repeat(2, 1fr);
			grid-column-gap: 0px;
			grid-row-gap: 0px;
		}

		.inner-flex {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 13rem;
			grid-area: 1 / 1 / 2 / 3;
		}

		h1 {
			font-size: 6rem;
			filter: invert(1);
			mix-blend-mode: difference;
		}

		p {
			font-size: 1.375rem;
			width: 350px;
		}

		.button-container {
			grid-area: 2 / 2 / 3 / 3;
			margin-top: 4rem;
			display: flex;
			justify-content: center;
			align-items: end;
			padding-bottom: 3rem;
		}
	}
</style>
