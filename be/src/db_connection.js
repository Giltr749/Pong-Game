import mysql from 'mysql';

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: "Pong"
});

function newUser(user) {

    var insertUser = "INSERT INTO users (id, email, password , fname, lname, nickname) VALUES ?";
    var values = [[user.id, user.email, user.password, user.fname, user.lname, user.nickname]];

    con.query(insertUser, [values], (err, res) => {
        if (err) throw err;
        console.log(`User added`);
    });
}

export default newUser;