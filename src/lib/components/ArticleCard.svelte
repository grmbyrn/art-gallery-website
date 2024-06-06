<script lang="ts">
	export let link: string;
	export let index: number;
	export let img: string;
	export let title: string;
	export let artistName: string;
</script>

<div class="container">
	<a href={link}>
		<img src={img} alt="Painting" />
		<h1>{title}</h1>
		<h2>{artistName}</h2>
	</a>
</div>

<style>
	.container {
		margin: 0 auto;
		position: relative;
		width: 100%;
		max-width: 600px; /* Adjust as needed */
		padding: 1.5rem;
		border: 1px solid red;
	}

	.container img {
		width: 100%;
		height: auto;
		display: block;
	}

	.container a {
		text-decoration: none;
		color: inherit;
	}

	.container h1,
	.container h2 {
		position: absolute;
		width: 100%;
		text-align: left;
		color: white;
		padding: 0 10px;
		margin: 2rem 2rem;
		text-transform: capitalize;
		font-family: 'Libre Baskerville', serif;
		text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.9);
	}

	.container h1 {
		bottom: 40px;
		font-size: 1.5rem;
		max-width: 300px;
		font-weight: 900;
	}

	.container h2 {
		bottom: 20px;
		font-size: 13px;
	}
</style>
