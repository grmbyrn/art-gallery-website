<script lang="ts">
	export let isMenuOpen: boolean;
	export let toggleMenu: () => void;
</script>

<nav class:open={isMenuOpen}>
	<slot />
</nav>
<button class="burger" on:click={toggleMenu} class:open={isMenuOpen}>
	<div class="bar-1" />
	<div class="bar-2" />
	<div class="bar-3" />
</button>

<style>
	.burger {
		height: 30px;
		aspect-ratio: 1;
		background-color: transparent;
		border: none;
		margin-right: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: all 300ms ease-in-out;
	}

	.burger > div {
		height: 5px;
		width: 20px;
		background-color: black;
		position: absolute;
		transition: all 300ms ease-in-out;
	}

	.bar-1 {
		transform: translateY(-8px);
	}

	.bar-3 {
		transform: translateY(8px);
	}

	/* menu icon animations */
	.burger.open .bar-1 {
		transform: rotateZ(45deg);
	}

	.burger.open .bar-2 {
		opacity: 0;
	}

	.burger.open .bar-3 {
		transform: rotateZ(-45deg);
	}

	nav {
		display: none;
		opacity: 0;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		transition: all 300ms ease-in-out;
	}

	nav.open {
		display: block;
		opacity: 1;
	}

	@media only screen and (min-width: 768px) {
		.burger {
			display: none;
		}

		nav {
			display: block;
			opacity: 1;
			position: relative;
			top: auto;
			left: auto;
			width: auto;
		}
	}
</style>
