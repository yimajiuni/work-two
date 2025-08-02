// Utility functions for tracking checked product history

export interface CheckedProduct {
    id: string;
    title: string;
    handle: string;
    description?: string;
    price: {
        amount: string;
        currencyCode: string;
    };
    image: string;
    variantId?: string;
    availableForSale?: boolean;
}

const CHECKED_HISTORY_KEY = 'checkedHistory';
const MAX_HISTORY_PRODUCTS = 20;

export const addToCheckedHistory = (product: CheckedProduct) => {
    try {
        // Get existing checked products
        const existingData = localStorage.getItem(CHECKED_HISTORY_KEY);
        let checkedProducts: CheckedProduct[] = existingData ? JSON.parse(existingData) : [];

        // Remove the product if it already exists (to avoid duplicates)
        checkedProducts = checkedProducts.filter(p => p.id !== product.id);

        // Add the new product to the beginning
        checkedProducts.unshift(product);

        // Limit the number of checked products
        if (checkedProducts.length > MAX_HISTORY_PRODUCTS) {
            checkedProducts = checkedProducts.slice(0, MAX_HISTORY_PRODUCTS);
        }

        // Save back to localStorage
        localStorage.setItem(CHECKED_HISTORY_KEY, JSON.stringify(checkedProducts));
    } catch (error) {
        console.error('Error saving to checked history:', error);
    }
};

export const getCheckedHistory = (): CheckedProduct[] => {
    try {
        const data = localStorage.getItem(CHECKED_HISTORY_KEY);
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error('Error loading checked history:', error);
        return [];
    }
};

export const clearCheckedHistory = () => {
    try {
        localStorage.removeItem(CHECKED_HISTORY_KEY);
    } catch (error) {
        console.error('Error clearing checked history:', error);
    }
}; 