//http://localhost:3000/myapp/ 
pizzaController = require('../db/controller/pizza.controller');
module.exports=(app) => {

    const { response } = require('express');

    const express = require('express');

    const router = express.Router();

    //List all books http://localhost:3000/myapp/allbooks

    // router.get('/allbooks', (req, res) => {

    //     res.send("all Books called");

    // });
    router.get('/menu',pizzaController.findAll);
    router.get('/pizza/:id',pizzaController.findOne);
    // router.put('/book/:id',bookController.updateBook);
    // router.delete('/delete/:id',bookController.delete);
    // router.post('/addBook',bookController.createBook);

    //book who's id is 1

    // router.get('/book/1', (req, res) => {

    //     res.send("book who's id is 1 called");

    // });

    //update the book who's id is 1

    // router.put('/book/1/author2', (req, res) => {

    //     res.send("update book is called");

    // });

    //delete book with id 1

    // router.delete('/delete/1', (req, res) => {

    //     res.send("delete book is called");

    // });

    //add new book

    // router.post('/addBook', (req, res) => {

    //     res.send("add book is called");

    // });



    app.use('/myapp',router)

}