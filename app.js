const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const publicPath = path.resolve( __dirname, './public');
app.use( express.static(publicPath));

const port = process.env.PORT || 3216;
app.listen(port, ()=>console.log(`Servidor corriendo en el puerto ${port}`));

app.get('/', (req, res) => {
    console.log(__dirname);
    res.sendFile(path.resolve(__dirname, './views/home.html'))
});

app.get('/login', (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/login.html"))
})

app.get('/home', (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/home.html"))
})
app.get('/registro', (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/register.html"))
})
