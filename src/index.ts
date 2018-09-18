import { Server, ResponseToolkit, Request } from "hapi";
import { ProductPlugin } from './product/index';

const server = new Server({
    port: "5000"
});

//server.register(new ProductPlugin(),{routes:{prefix:"/product"} })
// .then(()=>{
//     server.start().then(
//         () => { console.log("Server start"); },
//         (err) => { console.log("Server error" + err); }
//     );
// });

async function init() {
    try {
        await server.register(new ProductPlugin(), { routes: { prefix: "/product" } });
        await server.start();
        console.log("Server start");
    } catch (err) {
        console.log("Sever Error");
    }
}
init();
//ให้ "await ประกาศแล้วใช้ asysc" เพื่อใช้รันแทน .then
//ประกาศFunction แล้วต้องเรียกใช้ Functionด้วย
//Ex.fuuction init()
//เรียกใช้ init();
// server.route([
//     {
//         // localhost:5000/product/อะไรก็ตาม>
//         path: "/product/{productId}",
//         method: "GET",
//         handler: (request: Request, h: ResponseToolkit) => {
//             return request.params["productId"];
//         }
//     },

//     {
//         method: "GET",
//         path: '/product',
//         handler: (request: Request, h: ResponseToolkit) => {

//             return request.query;
//         }
//     },
//     {
//         method: "POST",
//         path: '/',
//         handler: (request: Request, h: ResponseToolkit) => {

//             return "Hi Post";
//         }
//     },
//     {
//         method: "POST",
//         path: '/H',
//         handler: (request: Request, h: ResponseToolkit) => {

//             return request.payload;
//         }
//     }
// ]);


