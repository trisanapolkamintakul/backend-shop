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
    },
    {
        method: ['PUT', 'POST'],
    path: '/g',
    handler: (request: Request, h: ResponseToolkit) => {

        return "I did something!";
    }
}
]);


server.start().then(
    () => {console.log("Server start"); },
    (err) =>{console.log("Server error" + err);}
);