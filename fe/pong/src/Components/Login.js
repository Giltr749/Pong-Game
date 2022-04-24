import React, { useState } from 'react';
import './Login.css'

function Login(props) {
   
    const [nick, setNick] = useState('');
    const [pass, setPass] = useState('');

   function isValid() {
    
   }
   
    return (
        <div className='login-div'>
            <h2>Login</h2>
            <label>Nickname:</label>
            <input type="text" onChange={e => setNick(e.target.value)}></input>
            <label>Password:</label>
            <input type="password" onChange={e => setPass(e.target.value)}></input>
            <p>Don't have an account? Sign Up</p>
        </div>
    );
}

export default Login;