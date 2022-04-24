import express from 'express';
import mysql from 'mysql';
import { lastScore, newUser, highScore } from './db_connection.js';
import { newScore } from './db_connection.js';
import bodyParser from 'body-parser';
import { nanoid } from 'nanoid';
import { encryptPass } from './middleware/passwords.js';
import { con } from './db_connection.js';
import bcrypt from 'bcrypt';
import cors from 'cors';


const jsonParser = bodyParser.json();
const app = express();
const PORT = 8080;

app.use(cors());

app.post('/signup', jsonParser, async (req, res) => {
    try {
        req.body.id = nanoid(5);
        req.body.password = encryptPass(req.body.password);
        await newUser(req.body);
        res.send('done');
    }
    catch (err) {
        res.send(err);
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

app.get('/highScore/:id', jsonParser, (req, res) => {
    highScore(req.params.id, (result) => {
        res.send(result);
    });
});

app.post('/login', jsonParser, async (req, res) => {

    const getUser = `SELECT * FROM users WHERE nickname ='${req.body.nickname}';`;

    con.query(getUser, async (err, result) => {
        if (err) send(err);

        bcrypt.compare(req.body.password, result[0].password, (err, checkRes) => {

            if (checkRes) {
                res.send(req.body.nickname);
            }
            else {
                res.status(400).send('Nickname or password incorrect.')
            }
        });
    });

});

app.listen(PORT, () => {
    console.log(`Listening @ ${PORT}`);
});