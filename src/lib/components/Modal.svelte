<script lang="ts">
	export let showModal: boolean;
	export let onClose: () => void;
	export let imageSrc: string;
</script>

{#if showModal}
	<div class="modal">
		<button on:click={onClose}>Close</button>
		<div class="modal-content" on:click|stopPropagation>
			<img src={imageSrc} alt="Modal Image" />
		</div>
	</div>
{/if}

<style>
	.modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.8);
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		z-index: 1000;
	}

	button {
		background-color: transparent;
		border: none;
		color: #ffffff;
		align-self: flex-end;
		padding-right: 1.5rem;
		text-transform: uppercase;
		font-family: 'Libre Baskerville', serif;
		font-size: 14px;
		letter-spacing: 3px;
		cursor: pointer;
	}

	.modal-content {
		background: transparent;
		padding: 1.5rem;
		border-radius: 5px;
		max-width: 100%;
		max-height: 100%;
		overflow: auto;
		margin-top: 1.5rem;
	}

	.modal-content img {
		max-width: 100%;
		max-height: 100%;
	}

	@media (min-width: 768px) {
		button {
			margin-top: 2rem;
		}
	}
</style>
