import mysql from 'mysql';
import bcrypt from 'bcrypt';


export var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: "Pong"
});

export async function newUser(user, callback) {

    const getUser = `SELECT * FROM users WHERE nickname = '${user.nickname}'`;

    con.query(getUser, (err, res) => {
        if (res.length > 0)
            callback('User already exists');

        else {
            const insertUser = "INSERT INTO users (id, email, password , fname, lname, nickname) VALUES ?";
            const values = [[user.id, user.email, user.password, user.fname, user.lname, user.nickname]];
            con.query(insertUser, [values], (err, res) => {
                if (err) throw (err);
                callback('done');
            }
            );
        }
    });


}

export function newScore(score) {
    var insertScore = "INSERT INTO scores (nickname, score, date) VALUES ?";
    var values = [[score.nickname, score.score, score.date]];
    con.query(insertScore, [values], (err, res) => {
        if (err)
            throw err;
        else
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

// export function login(user, callback) {

//     const getUser = `SELECT * FROM users WHERE nickname ='${user.nickname}';`;
//     con.query(getUser, (err, res) => {
//         bcrypt.compareSync(user.password, res[0].password, (err, result) => {
//             console.log(result);    
//             callback(result);
//         });
//     });
// }