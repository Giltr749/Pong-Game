import mysql from 'mysql';

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: "Pong"
});

export function newUser(user) {

    var insertUser = "INSERT INTO users (id, email, password , fname, lname, nickname) VALUES ?";
    var values = [[user.id, user.email, user.password, user.fname, user.lname, user.nickname]];

    con.query(insertUser, [values], (err, res) => {
        if (err) throw err;
        console.log(`User added`);
    });
}

export function newScore(score) {
    var insertScore = "INSERT INTO scores (nickname, score, date) VALUES ?";
    var values = [[score.nickname, score.score, score.date]];
    con.query(insertScore, [values], (err, res) => {
        if (err) throw err;
        console.log('Score added');
    });
}

export function lastScore(id, callback) {
    var getNickname = `SELECT * FROM scores WHERE nickname = (SELECT nickname FROM users WHERE id = '${id}') ORDER BY date DESC LIMIT 1`;
    con.query(getNickname, (err, res) => {
        return callback(res);
    });
}

export function highScore(id, callback) {
    var getNickname = `SELECT * FROM scores WHERE nickname = (SELECT nickname FROM users WHERE id = '${id}') ORDER BY score DESC LIMIT 1`;
    con.query(getNickname, (err, res) => {
        return callback(res);
    });
}