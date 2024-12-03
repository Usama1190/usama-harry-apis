import express from 'express';
import spells from '../spells.js';

const spellsRoute = express.Router();

spellsRoute.get('/', (req, res) => {
    res.status(200).send({ status: 200, charactersData: spells})
})

export default spellsRoute;