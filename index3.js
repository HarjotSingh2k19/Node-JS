// Creation of basic server
const http = require('http');

function dataControl(req,resp){
    resp.write("<h1>Hello this is harjot2</h1>");
    resp.end();
}

// http.createServer((req,resp) => {
//     resp.write("<h1>Hello this is harjot</h1>");
//     resp.end();
// }).listen(4500);
        // or
http.createServer(dataControl).listen(4500);

