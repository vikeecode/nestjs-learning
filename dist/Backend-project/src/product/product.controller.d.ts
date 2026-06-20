import { ProductService } from './product.service';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    getAllProducts(): {
        id: number;
        name: string;
        Price: number;
    }[];
    getByIdProducts(id: string): {
        id: number;
        name: string;
        Price: number;
    } | undefined;
}
