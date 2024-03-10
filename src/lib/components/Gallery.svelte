<div class="gallery-container">
	<div class="gallery-container-image">
		<picture>
			<source media="(min-width: 1100px)" srcset="./assets/desktop/image-grid-1.jpg" />
			<source media="(min-width: 481px)" srcset="./assets/tablet/image-grid-1.jpg" />
			<img class="product__image2" src="./assets/mobile/image-grid-1.jpg" alt="gallery" />
		</picture>
	</div>
	<div class="gallery-container-text">
		<h2>Your day at the gallery</h2>
		<p>
			Wander through our distinct collections and find new insights about our artists. Dive into the
			details of their creative process.
		</p>
	</div>
</div>

<style>
	.gallery-container {
		margin-top: 7.5rem;
	}

	.gallery-container-image {
		margin-top: 1.5rem;
	}

	.gallery-container img {
		max-width: 100%;
		height: auto;
	}

	h2 {
		font-size: 3.125rem;
		font-weight: 900;
	}

	p {
		font-size: 1.125rem;
		line-height: 1.75rem;
	}

	.gallery-container-text p {
		color: #444444;
	}

	@media (min-width: 768px) {
		.gallery-container {
			display: flex;
			flex-direction: row-reverse;
			gap: 4.25rem;
		}

		.gallery-container-image {
			flex: 1;
		}

		.gallery-container-text {
			flex: 1;
		}
	}

	@media only screen and (min-width: 1200px) {
		.gallery-container {
			padding-inline: 10.3125rem;
		}

		h2 {
			font-size: 3.75rem;
		}

		p {
			font-size: 1.375rem;
		}

		.gallery-container-image {
			flex: 2;
			display: flex;
			justify-content: flex-end; /* Center the image horizontally */
			align-items: center; /* Center the image vertically */
			overflow: hidden; /* Hide any overflow to prevent white space */
		}

		.gallery-container-text {
			flex: 1;
		}
	}
</style>
