import express from 'express';
import mysql from 'mysql';
import {newUser} from './db_connection.js';
import {newScore} from './db_connection.js'
import bodyParser from 'body-parser';
import {nanoid} from 'nanoid';
import encryptPass from './middleware/passwords.js';

const jsonParser = bodyParser.json();
const app = express();
const PORT = 8080;

app.post('/signup', jsonParser, (req, res) => {
    try {
        req.body.id = nanoid(5);
        req.body.password = encryptPass(req.body.password);
        newUser(req.body);
        res.send('done');
    }
    catch (err) {
        console.log('err');
    }
});

app.post('/addScore', jsonParser, (req,res) => {
    console.log(req.body);
    newScore(req.body);
    res.send('done');
});

app.listen(PORT, () => {
    console.log(`Listening @ ${PORT}`);
});