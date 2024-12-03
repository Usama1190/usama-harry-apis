import express from 'express';
import characters from '../characters.js';

const charactersRoute = express.Router();

charactersRoute.get('/', (req, res) => {
    res.status(200).send({ status: 200, charactersData: characters})
})

export default charactersRoute;