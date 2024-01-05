const http = require('http');

const server = http.createServer((err, req, res)=>{
    if(err){
        console.log(err);
        return
    }
    if(req.url === '/'){
        res.end('welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    res.end(`
    <h1>Oops!</h1>
    <p> We can't seem to find the page you are looking for</p>
    <a href="/"> back home </a>
    `)
})

server.listen(4000);