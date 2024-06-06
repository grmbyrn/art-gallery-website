<div class="container">
	<div class="text-container">
		<h2>Find some of the greats in our <a href="/gallery">Gallery</a></h2>
	</div>
	<div class="artists">
		<img src="assets/artists/starry-night/artist.jpg" alt="artist" />
		<img src="assets/artists/guernica/artist.jpg" alt="artist" />
		<img src="assets/artists/mona-lisa/artist.jpg" alt="artist" />
		<img src="assets/artists/penitent-magdalene/artist.jpg" class="extra extra-1" alt="artist" />
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		padding-inline: 1rem;
		margin-top: 4rem;
	}

	.text-container {
		background-color: #151515;
		color: #ffffff;
		flex: 1;
		padding-block: 10px 20px;
		text-align: center;
		font-size: 14px;
	}

	a {
		color: #ffffff;
	}

	a:hover {
		color: #d5966c;
	}

	.artists {
		display: flex;
		justify-content: space-between;
		margin-top: 2rem;
		gap: 2rem;
		flex: 1;
	}

	.artists img {
		width: 75px;
	}

	.extra {
		display: none;
	}

	@media only screen and (min-width: 767px) {
		.container {
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			padding-inline: 0rem;
			margin-top: 5rem;
			gap: 2rem;
		}

		.text-container {
			padding-block: 18px 35px;
			font-size: 16px;
		}

		.artists {
			margin-top: 0rem;
			gap: 1rem;
		}

		.artists img {
			width: 100px;
		}
	}

	@media only screen and (min-width: 1200px) {
		.container {
			display: flex;
			justify-content: space-between;
			margin-top: 4rem;
			margin-inline: 10rem;
		}

		.artists {
			display: flex;
			justify-content: space-between;
			margin-top: 0rem;
			gap: 5px;
		}

		.extra-1 {
			display: block;
		}
	}
</style>
