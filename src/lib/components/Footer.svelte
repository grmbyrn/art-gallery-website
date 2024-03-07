<script>
	import { page } from '$app/stores';
</script>

{#if $page.url.pathname === '/'}
	<div class="container">
		<div class="container-item">
			<img src="./assets/logo-light.svg" alt="logo" />
		</div>
		<div class="container-item">
			<p>
				The Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm.
				Find us at 99 King Street, Newport, USA.
			</p>
		</div>
		<ul class="socials-container container-item">
			<li>
				<a href="https://facebook.com"
					><img class="img" src="./assets/icon-facebook.svg" alt="facebook" /></a
				>
			</li>
			<li>
				<a href="https://instagram.com"><img src="./assets/icon-instagram.svg" alt="instagram" /></a
				>
			</li>
			<li>
				<a href="https://twitter.com"><img src="./assets/icon-twitter.svg" alt="twitter" /></a>
			</li>
		</ul>
	</div>
{:else}
	<div class="container-location">
		<div class="container-item">
			<img src="./assets/logo-dark.svg" alt="logo" />
		</div>
		<div class="container-item">
			<p>
				The Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm.
				Find us at 99 King Street, Newport, USA.
			</p>
		</div>
		<ul class="socials-container container-item">
			<li>
				<a href="https://facebook.com"
					><img class="img" src="./assets/icon-facebook.svg" alt="facebook" /></a
				>
			</li>
			<li>
				<a href="https://instagram.com"><img src="./assets/icon-instagram.svg" alt="instagram" /></a
				>
			</li>
			<li>
				<a href="https://twitter.com"><img src="./assets/icon-twitter.svg" alt="twitter" /></a>
			</li>
		</ul>
	</div>
{/if}

<style>
	.container {
		background-color: #151515;
		color: #ffffff;
		margin-top: 7.5rem;
		padding: 3rem 2rem;
	}

	.container-location {
		background-color: #d5966c;
		color: black;
		margin-top: 0rem;
		padding: 3rem 2rem;
	}

	p {
		margin-block: 2rem;
	}

	.socials-container {
		display: flex;
		gap: 1.25rem;
		padding: 0;
		margin: 0;
	}

	.socials-container li {
		list-style: none;
	}

	.img {
		filter: invert(4%) sepia(1%) saturate(234%) hue-rotate(314deg) brightness(103%) contrast(91%);
	}

	@media (min-width: 768px) {
		.container,
		.container-location {
			display: flex;
			flex-direction: row;
		}

		.container-item {
			flex: 1;
		}

		.socials-container {
			justify-content: flex-end;
		}

		p {
			margin-block: 0rem;
		}
	}

	@media only screen and (min-width: 1200px) {
	}
</style>
