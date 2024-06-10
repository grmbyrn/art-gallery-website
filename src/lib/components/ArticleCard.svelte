<script lang="ts">
	export let link: string;
	export let index: number;
	export let img: string;
	export let title: string;
	export let artistName: string;

	function extractLink(path: string): string {
		return path.replace(/^\.\/assets\/artists(.*?)\/thumbnail\.jpg$/, '$1');
	}
</script>

<div class="container">
	<a href={extractLink(link)}>
		<figure class="landscape">
			<img src={img} alt="Painting" />
			<figcaption>
				<h1>{title}</h1>
				<h2>{artistName}</h2>
			</figcaption>
		</figure>
	</a>
</div>

<style>
	.container {
		margin-top: 1.5rem;
	}

	a {
		text-decoration: none;
	}

	img {
		width: 100%;
		height: auto;
		display: block;
	}

	figure {
		margin: 0;
		display: grid;
		grid-template-rows: 1fr auto;
	}

	figure > img {
		grid-row: 1 / -1;
		grid-column: 1;
	}

	figcaption {
		grid-row: 2;
		grid-column: 1;
		padding: 2rem;
	}

	h1,
	h2 {
		color: white;
		padding: 2rem;
		text-transform: capitalize;
		font-family: 'Libre Baskerville', serif;
		text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.9);
		padding: 0;
	}

	h1 {
		font-size: 1.5rem;
	}

	h2 {
		font-size: 13px;
	}
</style>
