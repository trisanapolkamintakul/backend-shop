import { PluginBase, Server, PluginNameVersion, Request, ResponseToolkit } from "hapi";
import { ProductManager } from "./product_manager";
import { Product } from "./product";
import * as Joi from "joi";

//export เพื่อส่ง class Product ที่ไม่รู้จักไปยัง new Product for index
export class ProductPlugin implements PluginBase<Object>, PluginNameVersion {
    name = "product";
    version = "1";

    server: Server;

    register(server: Server, options: Object) {
        const productManager = new ProductManager([
            new Product("1", "เสื้อ", 299),
            new Product("2", "รองเท้า", 399),
            new Product("3", "กระเปา", 499),
        ]);
        //  this.server = server; ส่งserver ไปเป็น paramiterแทน
        this.registerRoute(server, productManager);
    }

    registerRoute(server: Server, productManager: ProductManager) {
        server.route([
            {
                method: "GET",
                path: "/",
                handler: (request: Request, h: ResponseToolkit) => {

                    return productManager.getAll();
                }
            },
            {
                method: "GET",
                path: "/{productId}",
                handler: (request: Request, h: ResponseToolkit) => {
                    const product = productManager.get(request.params["productId"]);
                    // return productManager.get(request.params["productId"])
                    return product || "not found"
                },
                options: {
                    validate: {
                        params: {
                            productId: Joi.number().min(1).max(10)
                        }
                    }
                }

            }

        ]);
    }


}