import bcrypt from 'bcrypt';

const saltRounds = 10;

function encryptPass(password) {
    return bcrypt.hashSync(password, saltRounds);
}

export default encryptPass;