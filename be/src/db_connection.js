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
    console.log(score);
    
   

    var values = [[score.nickname, score.score, score.date]];

    con.query(insertScore, [values], (err,res) =>{
        if (err) throw err;
        console.log('Score added');
    });
}

// export default {newUser, newScore};