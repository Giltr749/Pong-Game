import express from 'express';
import mysql from 'mysql';
import { lastScore, newUser, highScore } from './db_connection.js';
import { newScore } from './db_connection.js';
import bodyParser from 'body-parser';
import { nanoid } from 'nanoid';
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

app.post('/addScore', jsonParser, (req, res) => {
    newScore(req.body);
    res.send('done');
});

app.get('/lastScore/:id', jsonParser, (req, res) => {
    lastScore(req.params.id, (result) => {
        res.send(result);
    });
});

app.get('/highScore/:id', (req, res) => {
    highScore(req.params.id, (result) => {
        res.send(result);
    });
});

app.listen(PORT, () => {
    console.log(`Listening @ ${PORT}`);
});