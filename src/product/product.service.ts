import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    private products = [
        {
            id: 1,
            name: 'Mobile',
            Price: 10000
        },
        {
            id: 2,
            name: 'Laptop',
            Price: 20000
        },
        {
            id: 3,
            name: 'Tablet',
            Price: 15000
        }

    ];
    getAllProducts(){
        return  this.products;
    }
    getProductById(id:number) {
        return this.products.find(product => product.id === id);        
    }
}
