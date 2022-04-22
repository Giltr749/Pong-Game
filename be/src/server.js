import express from 'express';
import mysql from 'mysql';
import newUser from './db_connection.js';
import bodyParser from 'body-parser';
import {nanoid} from 'nanoid';

const jsonParser = bodyParser.json();
const app = express();
const PORT = 8080;

app.post('/signup', jsonParser, (req, res) => {
    try {
        req.body.id = nanoid(5);
        newUser(req.body);
        res.send('done');
    }
    catch (err) {
        console.log('err');
    }

});

app.listen(PORT, () => {
    console.log(`Listening @ ${PORT}`);
});