import { writable, get } from "svelte/store";

// Define the CartItem type
type CartItem = {
    id: string;
    quantity: number;
};

export const cartItems = writable<CartItem[]>([]);

// add to cart (add one)
export const addToCart = (id: string) => {
    const items = get(cartItems); // use const instead of let
    const itemPosition = items.findIndex((item) => item.id === id); // use const instead of let

    if (itemPosition !== -1) {
        // Item is already in cart, add to the quantity of that item
        cartItems.update((currentItems) => {
            const updatedItems = currentItems.map((item) => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
            return updatedItems;
        });
    } else {
        // Item is not in the cart at all, so add the object to the cart
        cartItems.update((currentItems) => {
            return [...currentItems, { id: id, quantity: 1 }];
        });
    }
};

// remove from cart (remove one)
export const removeFromCart = (id: string) => {
    const items = get(cartItems); // use const instead of let
    const itemPosition = items.findIndex((item) => item.id === id); // use const instead of let

    if (itemPosition !== -1) {
        if (items[itemPosition].quantity === 1) {
            // Remove the item if its quantity is 1
            const updatedItems = items.filter((item) => item.id !== id); // create a new array without the item
            cartItems.set(updatedItems);
        } else {
            // Decrease the quantity of the item
            cartItems.update((currentItems) => {
                const updatedItems = currentItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 };
                    }
                    return item;
                });
                return updatedItems;
            });
        }
    }
};
