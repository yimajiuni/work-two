"use client";
import { useState, useEffect, useCallback } from 'react';
import { getCollections, getProducts, getCollection } from '@/lib/Shopify';
import { getColorCode } from '@/lib/Utils';

interface Option {
    value: string;
    label: string;
    colorCode?: string;
}

interface CollectionData {
    collections: Option[];
    colors: Option[];
    sizes: Option[];
    loading: boolean;
    error: string | null;
}

export const useCollectionData = (): CollectionData => {
    const [collections, setCollections] = useState<Option[]>([]);
    const [colors, setColors] = useState<Option[]>([]);
    const [sizes, setSizes] = useState<Option[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchFilterData = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);

            // Fetch collections
            const collectionsData = await getCollections();
            console.log('📚 Available collections:', collectionsData.edges.map((edge: any) => ({
                title: edge.node.title,
                handle: edge.node.handle
            })));

            const collectionOptions = collectionsData.edges.map((edge: any) => ({
                value: edge.node.handle,
                label: edge.node.title
            }));

            setCollections(collectionOptions);

            // Fetch products to extract colors and sizes
            const productsData = await getProducts(250);
            const products = productsData.edges.map((edge: any) => edge.node);

            // Extract unique colors from product variants
            const colorSet = new Set<string>();
            const sizeSet = new Set<string>();
            const debugColors: string[] = [];

            products.forEach((product: any) => {
                product.variants.edges.forEach((variantEdge: any) => {
                    const variant = variantEdge.node;
                    if (variant.selectedOptions) {
                        variant.selectedOptions.forEach((option: any) => {
                            if (option.name && option.value) {
                                if (option.name.trim().toLowerCase() === 'color') {
                                    const normalized = option.value.trim().toLowerCase();
                                    colorSet.add(normalized);
                                    debugColors.push(option.value);
                                }
                                if (option.name.trim().toLowerCase() === 'size') {
                                    const normalized = option.value.trim().toLowerCase();
                                    sizeSet.add(normalized);
                                }
                            }
                        });
                    }
                });
            });

            // Debug: print all color values found
            if (typeof window !== 'undefined') {
                console.log('All color values found:', debugColors);
            }

            const colorOptions = Array.from(colorSet).map((color: string) => ({
                value: color,
                label: color.charAt(0).toUpperCase() + color.slice(1),
                colorCode: getColorCode(color)
            }));
            setColors(colorOptions);

            const sizeOptions = Array.from(sizeSet).map((size: string) => ({
                value: size,
                label: size.toUpperCase()
            }));
            setSizes(sizeOptions);

        } catch (error) {
            console.error('Error fetching filter data:', error);
            setError('Failed to load filter data');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchFilterData();
    }, [fetchFilterData]);

    return {
        collections,
        colors,
        sizes,
        loading,
        error
    };
};

interface ProductData {
    products: any[];
    loading: boolean;
    error: string | null;
    refetch: () => void;
}

export const useProductData = (collectionHandle?: string): ProductData => {
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchProducts = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);

            let productsData;

            if (collectionHandle) {
                console.log("Fetching products for collection:", collectionHandle);
                const collection = await getCollection(collectionHandle, 250);
                console.log("Collection data:", collection);
                productsData = collection.products;
                console.log("Products from collection:", productsData);
            } else {
                console.log("Fetching all products");
                productsData = await getProducts(250);
            }

            const productNodes = productsData.edges.map((edge: any) => edge.node);
            setProducts(productNodes);

        } catch (err) {
            console.error("Error fetching products:", err);
            setError("Failed to load products. Please try again.");
        } finally {
            setLoading(false);
        }
    }, [collectionHandle]);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return {
        products,
        loading,
        error,
        refetch: fetchProducts
    };
}; 