<div class="gallery-container">
	<div class="gallery-container-img">
		<picture>
			<source media="(min-width: 1100px)" srcset="./assets/desktop/image-grid-2.jpg" />
			<source media="(min-width: 481px)" srcset="./assets/tablet/image-grid-2.jpg" />
			<img class="product__image2" src="./assets/mobile/image-grid-2.jpg" alt="gallery" />
		</picture>
	</div>
	<div class="gallery-container-inspired">
		<div class="gallery-container-lower-img">
			<picture>
				<source media="(min-width: 1100px)" srcset="./assets/desktop/image-grid-3.jpg" />
				<source media="(max-width: 481px)" srcset="./assets/tablet/image-grid-3.jpg" />
				<img class="product__image2" src="./assets/mobile/image-grid-3.jpg" alt="gallery" />
			</picture>
		</div>
		<div class="gallery-container-text">
			<h2>Come &amp;<br /> be inspired</h2>
			<p>We’re excited to welcome you to our gallery and see how our collections influence you.</p>
		</div>
	</div>
</div>

<style>
	.gallery-container-img img,
	.gallery-container-inspired img {
		max-width: 100%;
		height: auto;
	}

	.gallery-container-img,
	.gallery-container-inspired {
		margin-top: 1rem;
	}

	.gallery-container-text {
		background-color: #151515;
		color: #ffffff;
		padding: 2rem 1.5rem;
		margin-top: 1rem;
	}

	.gallery-container-text h2 {
		font-weight: 900;
		font-size: 3.125rem;
	}

	.gallery-container-text p {
		font-size: 1.125rem;
	}

	@media (min-width: 768px) {
		.gallery-container {
			display: flex;
			margin-top: 1rem;
			gap: 11px;
		}

		.gallery-container-img,
		.gallery-container-inspired {
			margin-top: 0;
			flex: 1;
		}

		.gallery-container-img {
			display: flex;
			justify-content: flex-end; /* Center the image horizontally */
			align-items: center; /* Center the image vertically */
			overflow: hidden;
		}

		.gallery-container-img img {
			width: 100%;
			height: 740px;
		}

		.gallery-container-inspired {
			display: flex;
			flex-direction: column;
			gap: 11px;
		}

		.gallery-container-lower-img {
			display: flex;
			justify-content: flex-end; /* Center the image horizontally */
			align-items: center; /* Center the image vertically */
			overflow: hidden; /* Hide any overflow to prevent white space */
		}

		.gallery-container-lower-img img {
			width: 100%;
			height: 309px;
		}

		.gallery-container-text {
			margin-top: 0;
			padding: 85px 24px;
		}
	}

	@media only screen and (min-width: 1200px) {
		.gallery-container {
			gap: 30px;
			padding-inline: 10.3125rem;
		}

		.gallery-container-img {
			display: flex;
			justify-content: flex-end; /* Center the image horizontally */
			align-items: center; /* Center the image vertically */
			overflow: hidden;
		}

		.gallery-container-img img {
			width: 100%;
			height: 740px;
		}

		.gallery-container-inspired {
			display: flex;
			flex-direction: column;
			gap: 30px;
		}

		.gallery-container-lower-img {
			display: flex;
			justify-content: flex-end; /* Center the image horizontally */
			align-items: center; /* Center the image vertically */
			overflow: hidden; /* Hide any overflow to prevent white space */
		}

		.gallery-container-lower-img img {
			width: 100%;
			height: 313px;
		}

		.gallery-container-text {
			margin-top: 0;
			padding: 68px;
			height: 398px;
		}

		.gallery-container-text h2 {
			font-size: 3.75rem;
		}

		.gallery-container-text p {
			font-size: 1.375rem;
		}
	}
</style>
