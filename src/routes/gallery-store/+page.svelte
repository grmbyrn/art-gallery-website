<script lang="ts">
	import ProductCard from '$lib/components/ProductCard.svelte';
	import { get } from 'svelte/store';
	import { cartItems } from '../../cart';
	import type { Product } from '$lib/utils/types';

	import { onMount } from 'svelte';

	let products: Product[] = [];

	onMount(async () => {
		products = await getProducts();
	});

	const getProducts = async () => {
		const res = await fetch('/products.json');
		const data = await res.json();
		return data;
	};

	async function checkout() {
		await fetch('api/stripeCheckout', {
			// http://localhost:5173/api/stripeCheckout
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ items: get(cartItems) })
		})
			.then((data) => {
				return data.json();
			})
			.then((data) => {
				window.location.replace(data.url);
			});
	}
</script>

<div class="container">
	<div class="product-container">
		{#each products as product}
			<ProductCard {product} />
		{/each}
	</div>
	<div class="checkout">
		<button on:click={() => checkout()}>Checkout with Stripe API</button>
	</div>
</div>

<style>
	.container {
		margin-inline: 2rem;
	}

	.product-container {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}

	.checkout {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 3rem;
	}

	button {
		font-family: 'Outfit', sans-serif;
		font-optical-sizing: auto;
		font-weight: bold;
		font-style: normal;
		font-size: 1rem;
		text-transform: uppercase;
		background-color: #d5966c;
		color: #ffffff;
		padding-inline: 2rem;
		padding-block: 1.5rem;
		letter-spacing: 3.64px;
		border: none;
		margin-bottom: 5rem;
	}

	button:hover {
		background-color: #151515;
		cursor: pointer;
	}
</style>
