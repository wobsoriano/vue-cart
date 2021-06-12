const fakeStoreUrl = 'https://fakestoreapi.com';

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

export const getAllProducts = async (): Promise<Product[]> => {
    const resp = await fetch(`${fakeStoreUrl}/products`);
    return resp.json();
}

export const getOneProduct = async (id: number): Promise<Product> => {
    const resp = await fetch(`${fakeStoreUrl}/products/${id}`);
    return resp.json();
}