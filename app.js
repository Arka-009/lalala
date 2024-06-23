const http=require('http')
const server=http.createServer((req,res)=>
    {if(req.url==='/'){
        res.end('welcome to the home page')
    }
    else if(req.url==='/about'){
        res.end('welcome to the about page')
    }
    else{
    res.end('hello boy!!')}
})
server.listen(5000)