<script>
	import Button from '$lib/components/Button.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="container">
	<div class="btn">
		<Button />
	</div>
	<div class="map-img"></div>
	<div class="location-container">
		<div class="location-container-1">
			<h1>Our Location</h1>
		</div>
		<div class="location-container-2">
			<h2>99 King Street</h2>
			<address>
				<div>Newport</div>
				<div>RI 02840</div>
				<div>United States of America</div>
			</address>
			<p>
				Our newly opened gallery is located near the Edward King House on 99 King Street, the Modern
				Art Gallery is free to all visitors and open seven days a week from 8am to 9pm.
			</p>
		</div>
	</div>
	<div class="footer">
		<Footer />
	</div>
</div>

<style>
	.container {
		display: block;
		width: 23.438rem;
		margin-left: auto;
		margin-right: auto;
		position: relative;
	}

	.btn {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 2;
	}

	.map-img {
		background-image: url('./assets/mobile/image-map.png');
		background-repeat: no-repeat;
		height: 550px;
		position: relative;
		z-index: 1;
	}

	.location-container {
		background-color: #151515;
		border: 1px solid transparent;
		padding-inline: 1rem;
	}

	h1,
	address,
	p {
		color: #ffffff;
	}

	address,
	p {
		font-size: 1.125rem;
	}

	.location-container-1 {
		margin-top: 3rem;
	}

	h1 {
		font-size: 3.125rem;
	}

	.location-container-2 {
		margin-block: 3rem 3.5rem;
	}

	h2 {
		color: #d5966c;
		font-size: 2rem;
	}

	address {
		font-style: normal;
	}

	@media (min-width: 768px) {
		.container {
			width: 48rem;
		}

		.btn {
			left: 2.4375rem;
		}

		.map-img {
			background-image: url('./assets/tablet/image-map.png');
		}

		.location-container {
			display: flex;
			padding: 5.5rem 2.5rem 5rem 2.5rem;
		}

		.location-container-1 {
			flex: 1;
			margin-top: 0;
		}

		.location-container-2 {
			flex: 1;
			margin-top: 0;
		}

		h1 {
			margin-top: 0;
			font-size: 3.4375rem;
		}

		h2 {
			margin-top: 0;
		}

		address {
			padding-block: 1.25rem;
		}
	}

	@media only screen and (min-width: 1200px) {
		.container {
			min-width: clamp(70rem, 90rem, 100%);
		}

		.btn {
			left: 9.75rem;
		}

		.map-img {
			background-image: url('./assets/desktop/image-map.png');
		}

		.location-container {
			padding: 6.5rem 10.3125rem 5rem 8rem;
		}

		h1 {
			font-size: 4.375rem;
		}

		p,
		address {
			font-size: 1.375rem;
		}
	}
</style>
