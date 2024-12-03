import express from 'express';
import dotenv from 'dotenv';
import booksRoute from './routes/booksRoute.js';
import charactersRoute from './routes/charactersRoute.js';
import housesRoute from './routes/housesRoute.js';
import spellsRoute from './routes/spellsRoute.js';

const app = express();
dotenv.config();



app.get('/', (req, res) => {
    res.status(200).send('Server is Running!')
})

app.get('/en', (req, res) => {
    res.status(200).send({"message":"This is the endpoint of the English language","lang":"en","langName":"English","routes":["/en/books","/en/characters","/en/houses","/en/spells"],"languagesAvailable":["en","es","fr","it","pt"]})
})


app.use('/en/books', booksRoute);
app.use('/en/characters', charactersRoute);
app.use('/en/houses', housesRoute);
app.use('/en/spells', spellsRoute)





const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})