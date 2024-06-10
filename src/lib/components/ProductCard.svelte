<script lang="ts">
	import { get } from 'svelte/store';
	import { cartItems, addToCart, removeFromCart } from '../../cart';
	import type { Product } from '$lib/utils/types';

	export let product: Product = { id: '', name: '', price: 0, image: '' };
	let cart = get(cartItems); // [ { id: "1", quantity: 6 }, { id: "2", quantity: 3 } ]
	// id: "1"
	let cartItemIndex = cart.findIndex((item) => {
		return item.id === product.id;
	});
	let cartProduct = cart[cartItemIndex];
	cartItems.subscribe((newCartValue) => {
		cart = newCartValue;
		cartItemIndex = cart.findIndex((item) => {
			return item.id === product.id;
		});
		cartProduct = cart[cartItemIndex];
		console.log(cart);
	});
</script>

<div class="container">
	<div>
		<img src={product.image} alt="" />
	</div>
	<div class="product-details">
		<h2>{product.name}</h2>
		<div class="price">
			<h3>Price: ${product.price}</h3>
			{#if cartProduct !== undefined}
				<h3>
					Quantity: <strong>{cartProduct.quantity}</strong>
				</h3>
			{/if}
		</div>
		<div class="button-container">
			<button on:click={() => addToCart(product.id)}>Add</button>
			<button on:click={() => removeFromCart(product.id)}>Remove</button>
		</div>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		max-width: 500px;
		margin: 1rem;
	}

	.product-details {
		text-align: center;
	}

	.price {
		display: flex;
		justify-content: center;
		gap: 1rem;
	}

	.button-container {
		display: flex;
		justify-content: center;
		gap: 1rem;
		margin-top: 1rem;
	}

	button {
		font-family: 'Outfit', sans-serif;
		font-optical-sizing: auto;
		font-weight: bold;
		font-style: normal;
		font-size: 1rem;
		text-transform: uppercase;
		background-color: #151515;
		color: #ffffff;
		padding-inline: 2rem;
		letter-spacing: 3.64px;
		border: none;
		width: 150px;
	}

	button:hover {
		background-color: #d5966c;
		cursor: pointer;
	}
</style>
