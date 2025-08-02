"use client";
import { useShopifyCart } from "@/hooks/useShopifyCart";
import { formatYen } from "@/lib/Utils";

const CartDebugger = () => {
    const {
        items,
        isLoading,
        cartId,
        error,
        getCartTotal,
        getCartCount,
        loadCart
    } = useShopifyCart();

    return (
        <div className="fixed bottom-4 right-4 bg-black text-white p-4 rounded-lg text-xs max-w-sm z-50">
            <h3 className="font-bold mb-2">🛒 Cart Debug</h3>
            <div className="space-y-1">
                <div>Cart ID: {cartId || 'None'}</div>
                <div>Items: {items.length}</div>
                <div>Total: {formatYen(getCartTotal())}</div>
                <div>Count: {getCartCount()}</div>
                <div>Loading: {isLoading ? 'Yes' : 'No'}</div>
                {error && <div className="text-red-400">Error: {error}</div>}
            </div>
            <button
                onClick={loadCart}
                className="mt-2 bg-blue-600 px-2 py-1 rounded text-xs"
            >
                Reload Cart
            </button>
        </div>
    );
};

export default CartDebugger; 