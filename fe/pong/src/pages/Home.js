import React from 'react';
import Login from '../Components/Login';
import Signup from '../Components/Signup';

function Home(props) {
    return (
        <div>
            <Signup />
            <Login />
        </div>
    );
}

export default Home;