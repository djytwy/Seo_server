const express = require('express')
const Redis = require('ioredis')

const app = express();
const redis = new Redis(6379,'172.17.0.2')

app.get('/', async (req,res) => {
    const url = `${req.protocol}://${req.hostname}${req.originalUrl}`;
    console.log(`this request from : ${url}`);
    const html = await redis.get(url);
    res.send(html)
})

app.listen(3000,() => {
    console.log("the server is runing on port 3000.....")
})