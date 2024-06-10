<script lang="ts">
	import AnimatedHamburger from './AnimatedHamburger.svelte';

	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<header class="container">
	<div class="navbar">
		<a href="/">
			<img src="./assets/artists/shared/logo.svg" alt="logo" />
		</a>
		<AnimatedHamburger {isMenuOpen} {toggleMenu}>
			<div class="links-wrapper">
				<ul class="links">
					<li>
						<a href="/gallery">Gallery</a>
					</li>
					<li>
						<a href="/location">Location</a>
					</li>
				</ul>
			</div>
		</AnimatedHamburger>
	</div>
</header>

<style>
	.container {
		display: block;
		margin-left: auto;
		margin-right: auto;
		padding: 1rem 2rem;
	}

	.navbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
	}

	ul {
		display: flex;
		flex-direction: row;
		align-items: end;
		justify-content: end;
		gap: 5vh;
		list-style: none;
		font-size: 1.1rem;
		letter-spacing: 0.2rem;
		background-color: #d5966c;
		padding: 1rem;
		text-align: right;
		border-radius: 10px;
	}

	/* navlink animations */
	li > a {
		display: inline-block;
		transition: all 200ms ease-in-out;
		text-decoration: none;
		font-family: 'Big Shoulders Display', sans-serif;
		color: #151515;
	}

	li > a:hover {
		transform: scale(0.9);
		color: #ffffff;
	}

	li > a:active {
		transform: scale(0.9);
	}

	.links-wrapper {
		padding: 0rem;
		margin: 3rem 1rem;
		opacity: 1;
		border-radius: 10px;
	}

	ul {
		margin: 0;
		flex-direction: column;
		gap: 2vw;
	}

	@media (min-width: 768px) {
		.container {
			padding: 0rem 2rem;
		}

		ul {
			background-color: transparent;
		}

		.links {
			display: flex;
			flex-direction: row;
		}

		li > a:hover {
			transform: scale(0.9);
			color: #d5966c;
		}
	}

	@media (min-width: 1200px) {
		.container {
			padding: 0rem 5rem;
		}
	}
</style>
