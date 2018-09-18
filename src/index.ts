import { Server, ResponseToolkit, Request } from "hapi";


const server = new Server({
    port: "5000"
});
server.route([
    {
        path: "/",
        method: "GET",
        handler: (request: Request, h: ResponseToolkit) => {
return "Hello World";
        }
    }
]);

server.start().then(
    () => {console.log("Server start"); },
    (err) =>{console.log("Server error" + err);}
);