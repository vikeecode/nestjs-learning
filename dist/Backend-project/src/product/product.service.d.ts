export declare class ProductService {
    private products;
    getAllProducts(): {
        id: number;
        name: string;
        Price: number;
    }[];
    getProductById(id: number): {
        id: number;
        name: string;
        Price: number;
    } | undefined;
}
