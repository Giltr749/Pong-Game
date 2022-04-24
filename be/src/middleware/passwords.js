import bcrypt from 'bcrypt';

const saltRounds = 10;

export async function encryptPass(password) {
    return await bcrypt.hash(password, saltRounds);
}

// export async function decryptPass(password, hash, callback) {
//     return await bcrypt.compare(password, hash, (err, res)=>{
//         callback(res);
//     });
// }
