import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ShopifyCart, createCart, addToCart, updateCartItem, removeFromCart, getCart } from '@/lib/Shopify';
import { refreshProductStock } from '@/lib/Shopify';

interface CartItem {
    id: string;
    variantId: string;
    title: string;
    variantTitle: string;
    price: string;
    quantity: number;
    image: string;
    productHandle: string;
}

interface CartStore {
    // State
    cartId: string | null;
    checkoutUrl: string | null;
    items: CartItem[];
    isLoading: boolean;
    error: string | null;

    // Actions
    initializeCart: () => Promise<string | null>;
    loadCart: () => Promise<void>;
    addItem: (variantId: string, quantity?: number) => Promise<void>;
    updateItem: (lineId: string, quantity: number) => Promise<void>;
    removeItem: (lineId: string) => Promise<void>;
    clearCart: () => void;
    getCartTotal: () => number;
    getCartCount: () => number;
    checkout: () => void;
    refreshCartStock: () => Promise<void>;
}

const useShopifyCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            // Initial state
            cartId: null,
            checkoutUrl: null,
            items: [],
            isLoading: false,
            error: null,

            // Initialize cart
            initializeCart: async () => {
                try {
                    set({ isLoading: true, error: null });

                    // Check if we have a cart ID in storage
                    const { cartId } = get();

                    if (!cartId) {
                        // Create new cart
                        const cart = await createCart();
                        if (cart && cart.id) {
                            set({
                                cartId: cart.id,
                                checkoutUrl: cart.checkoutUrl,
                                isLoading: false
                            });
                            return cart.id;
                        } else {
                            throw new Error('Failed to create cart - no cart ID returned');
                        }
                    }

                    return cartId;
                } catch (error) {
                    console.error('Error initializing cart:', error);
                    set({ error: 'Failed to initialize cart', isLoading: false });
                    throw error;
                }
            },

            // Load existing cart data
            loadCart: async () => {
                try {
                    set({ isLoading: true, error: null });

                    const { cartId } = get();

                    if (!cartId) {
                        set({ isLoading: false });
                        return;
                    }

                    // Fetch the existing cart from Shopify
                    const cart = await getCart(cartId);
                    if (cart && cart.id) {
                        const cartItems: CartItem[] = cart.lines.edges.map((edge: any) => ({
                            id: edge.node.id,
                            variantId: edge.node.merchandise.id,
                            title: edge.node.merchandise.product.title,
                            variantTitle: edge.node.merchandise.title,
                            price: edge.node.merchandise.price.amount,
                            quantity: edge.node.quantity,
                            image: edge.node.merchandise.product.images.edges[0]?.node.url || '',
                            productHandle: edge.node.merchandise.product.handle,
                        }));

                        set({
                            cartId: cart.id,
                            checkoutUrl: cart.checkoutUrl,
                            items: cartItems,
                            isLoading: false,
                        });
                    }
                } catch (error) {
                    console.error('Error loading cart:', error);
                    set({ error: 'Failed to load cart', isLoading: false });
                }
            },

            // Add item to cart
            addItem: async (variantId: string, quantity: number = 1) => {
                try {
                    set({ isLoading: true, error: null });
                    console.log('🛒 Adding item to cart:', { variantId, quantity });

                    let { cartId } = get();
                    console.log('Current cartId:', cartId);

                    if (!cartId) {
                        console.log('No cartId found, initializing cart...');
                        const newCartId = await get().initializeCart();
                        console.log('New cartId after initialization:', newCartId);
                        cartId = newCartId || get().cartId;
                    }

                    if (!cartId) {
                        throw new Error('Failed to create or retrieve cart');
                    }

                    console.log('Using cartId for addToCart:', cartId);
                    const updatedCart = await addToCart(cartId, variantId, quantity);
                    console.log('✅ Cart updated successfully:', updatedCart);

                    // Update local state with new cart data
                    const cartItems: CartItem[] = updatedCart.lines.edges.map((edge: any) => ({
                        id: edge.node.id,
                        variantId: edge.node.merchandise.id,
                        title: edge.node.merchandise.product.title,
                        variantTitle: edge.node.merchandise.title,
                        price: edge.node.merchandise.price.amount,
                        quantity: edge.node.quantity,
                        image: edge.node.merchandise.product.images.edges[0]?.node.url || '',
                        productHandle: edge.node.merchandise.product.handle,
                    }));

                    console.log('📦 Cart items after update:', cartItems);

                    set({
                        cartId: updatedCart.id,
                        checkoutUrl: updatedCart.checkoutUrl,
                        items: cartItems,
                        isLoading: false,
                    });

                    console.log('✅ Cart state updated successfully');
                } catch (error) {
                    console.error('❌ Error adding item to cart:', error);
                    set({ error: 'Failed to add item to cart', isLoading: false });
                }
            },

            // Update item quantity
            updateItem: async (lineId: string, quantity: number) => {
                try {
                    set({ isLoading: true, error: null });

                    const { cartId } = get();

                    if (!cartId) {
                        throw new Error('No cart found');
                    }

                    const updatedCart = await updateCartItem(cartId, lineId, quantity);

                    // Update local state
                    const cartItems: CartItem[] = updatedCart.lines.edges.map((edge: any) => ({
                        id: edge.node.id,
                        variantId: edge.node.merchandise.id,
                        title: edge.node.merchandise.product.title,
                        variantTitle: edge.node.merchandise.title,
                        price: edge.node.merchandise.price.amount,
                        quantity: edge.node.quantity,
                        image: edge.node.merchandise.product.images.edges[0]?.node.url || '',
                        productHandle: edge.node.merchandise.product.handle,
                    }));

                    set({
                        checkoutUrl: updatedCart.checkoutUrl,
                        items: cartItems,
                        isLoading: false,
                    });
                } catch (error) {
                    console.error('Error updating cart item:', error);
                    set({ error: 'Failed to update item', isLoading: false });
                }
            },

            // Remove item from cart
            removeItem: async (lineId: string) => {
                try {
                    set({ isLoading: true, error: null });

                    const { cartId } = get();

                    if (!cartId) {
                        throw new Error('No cart found');
                    }

                    const updatedCart = await removeFromCart(cartId, lineId);

                    // Update local state
                    const cartItems: CartItem[] = updatedCart.lines.edges.map((edge: any) => ({
                        id: edge.node.id,
                        variantId: edge.node.merchandise.id,
                        title: edge.node.merchandise.product.title,
                        variantTitle: edge.node.merchandise.title,
                        price: edge.node.merchandise.price.amount,
                        quantity: edge.node.quantity,
                        image: edge.node.merchandise.product.images.edges[0]?.node.url || '',
                        productHandle: edge.node.merchandise.product.handle,
                    }));

                    set({
                        checkoutUrl: updatedCart.checkoutUrl,
                        items: cartItems,
                        isLoading: false,
                    });
                } catch (error) {
                    console.error('Error removing item from cart:', error);
                    set({ error: 'Failed to remove item', isLoading: false });
                }
            },

            // Clear cart
            clearCart: () => {
                set({
                    cartId: null,
                    items: [],
                    error: null,
                });
            },

            // Calculate cart total
            getCartTotal: () => {
                const { items } = get();
                return items.reduce((total, item) => {
                    return total + (parseFloat(item.price) * item.quantity);
                }, 0);
            },

            // Get cart item count
            getCartCount: () => {
                const { items } = get();
                return items.reduce((count, item) => count + item.quantity, 0);
            },

            // Redirect to checkout
            checkout: () => {
                const { checkoutUrl } = get();
                if (checkoutUrl) {
                    // Redirect to Shopify's checkout
                    window.location.href = checkoutUrl;
                } else {
                    console.error('No checkout URL available');
                }
            },

            // Refresh stock data for products in cart
            refreshCartStock: async () => {
                try {
                    const { items, cartId } = get();

                    if (!items.length || !cartId) {
                        console.log('🔄 No items in cart to refresh stock for');
                        return;
                    }

                    // Extract product IDs from cart items
                    const productIds = items.map(item => {
                        // Extract product ID from variant ID (assuming format: gid://shopify/ProductVariant/123456789)
                        const variantIdParts = item.variantId.split('/');
                        const variantId = variantIdParts[variantIdParts.length - 1];
                        // For now, we'll need to get product IDs differently
                        // This is a simplified approach
                        return item.id; // Using cart item ID as placeholder
                    });

                    console.log('🔄 Refreshing stock for cart products:', productIds);

                    // Reload cart to get fresh data
                    await get().loadCart();

                    console.log('✅ Cart stock refresh completed');
                } catch (error) {
                    console.error('❌ Error refreshing cart stock:', error);
                }
            },
        }),
        {
            name: 'shopify-cart-storage',
            partialize: (state) => ({
                cartId: state.cartId,
                items: state.items,
            }),
        }
    )
);

// React hook that subscribes to the store
export const useShopifyCart = () => {
    return useShopifyCartStore();
}; 