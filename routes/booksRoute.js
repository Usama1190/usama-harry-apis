import express from 'express';
import books from '../books.js';

const booksRoute = express.Router();

booksRoute.get('/', (req, res) => {
    res.status(200).send({ status: 200, booksData: books})
})

export default booksRoute;