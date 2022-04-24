import express from "express";
import mysql from "mysql";
import { lastScore, newUser, highScore } from "./db_connection.js";
import { newScore } from "./db_connection.js";
import bodyParser from "body-parser";
import { nanoid } from "nanoid";
import { encryptPass } from "./middleware/passwords.js";
import { con } from "./db_connection.js";
import bcrypt from "bcrypt";
import cors from "cors";

const jsonParser = bodyParser.json();
const app = express();
const PORT = 8080;

app.use(cors());

app.post("/signup", jsonParser, async (req, res) => {
  try {
    req.body.id = nanoid(5);
    req.body.password = encryptPass(req.body.password);
    await newUser(req.body, (result) => {
      res.send(result);
    });
    // res.send('done');
  } catch (err) {
    res.send(err);
  }
});

app.post("/addScore", jsonParser, (req, res) => {
  newScore(req.body);
  res.send("done");
});

app.get("/lastScore/:id", jsonParser, (req, res) => {
  lastScore(req.params.id, (result) => {
    res.send(result);
  });
});

app.get("/highScore/:id", jsonParser, (req, res) => {
  highScore(req.params.id, (result) => {
    res.send(result);
  });
});

app.post("/login", jsonParser, async (req, res) => {
  const getUser = `SELECT * FROM users WHERE nickname ='${req.body.nickname}';`;

  con.query(getUser, async (err, result) => {
    if (err) res.send("hello");

    bcrypt.compare(req.body.password, result[0].password, (err, checkRes) => {
      if (checkRes) {
        res.send(req.body.nickname);
      } else {
        res.status(400).send("Nickname or password incorrect.");
      }
    });
  });
});

app.post("/login", function (request, response) {
  // Capture the input fields
  let nickname = request.body.nickname;
  let password = request.body.password;
  // Ensure the input fields exists and are not empty
  if (nickname && password) {
    // Execute SQL query that'll select the account from the database based on the specified username and password
    con.query(
      "SELECT * FROM users WHERE nickname = ? AND password = ?",
      [username, password],
      function (error, results, fields) {
        // If there is an issue with the query, output the error
        if (error) throw error;
        // If the account exists
        if (results.length > 0) {
          // Authenticate the user
          request.session.loggedin = true;
          request.session.username = username;
          // Redirect to home page
          response.redirect("/home");
        } else {
          response.send("Incorrect Username and/or Password!");
        }
        response.end();
      }
    );
  } else {
    response.send("Please enter Username and Password!");
    response.end();
  }
});

// http://localhost:3000/home
app.get("/home", function (request, response) {
  // If the user is loggedin
  if (request.session.loggedin) {
    // Output username
    response.send("Welcome back, " + request.session.username + "!");
  } else {
    // Not logged in
    response.send("Please login to view this page!");
  }
  response.end();
});

app.listen(PORT, () => {
  console.log(`Listening @ ${PORT}`);
});
