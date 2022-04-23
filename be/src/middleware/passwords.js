import bcrypt from 'bcrypt';
import { newUser } from '../db_connection.js';

const saltRounds = 10;

function encryptPass(password) {
    return bcrypt.hashSync(password, saltRounds);
}

export default encryptPass;