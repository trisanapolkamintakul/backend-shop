import { Product } from "./product";

export class ProductManager {

    constructor(private products: Product[]) {
        // this.products = [
        //     new Product("1", "เสื้อ", 299),
        //     new Product("2", "รองเท้า", 399),
        //     new Product("3", "กระเปา", 499),

        // ]; ไม่จำเป็นต้องมี เพราะไปกำหนดใน หน้า index/productแล้ว
    }

    getAll(): Product[] {
        return this.products;
    }

    get(id: string): Product {
        return this.products.find((product) => {
            return product.id == id;
        });
    }
}