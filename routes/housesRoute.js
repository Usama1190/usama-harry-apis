import express from 'express';
import houses from '../houses.js';

const housesRoute = express.Router();

housesRoute.get('/', (req, res) => {
    res.status(200).send({ status: 200, charactersData: houses})
})

export default housesRoute;