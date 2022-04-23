import bcrypt from 'bcrypt';

const saltRounds = 10;

async function encryptPass(password) {
    let toHash = password;
    bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(toHash, salt, (err, hash) => {
            console.log(hash);
        });
    });
}

export default encryptPass;