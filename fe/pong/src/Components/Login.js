import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login(props) {
  const [nick, setNick] = useState("");
  const [pass, setPass] = useState("");

  function isValid() {}

  let navigate = useNavigate();
  function toSignup() {
    navigate("/signup");
  }

  function toGame() {
    navigate("/pong");
  }

  async function login() {
    const user = { nickname: nick, password: pass };
    const response = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    console.log(await response);
    return await response;
  }

  return (
    <>
      <div className="login-div">
        <h2>Login</h2>
        <label>Nickname:</label>
        <input type="text" onChange={(e) => setNick(e.target.value)}></input>
        <label>Password:</label>
        <input
          type="password"
          onChange={(e) => setPass(e.target.value)}
        ></input>
        <button onClick={login}>Login</button>
        <p>
          Don't have an account?{" "}
          <span onClick={toSignup} style={{ textDecoration: "underline" }}>
            Sign up
          </span>
        </p>
      </div>
      <button className="login-div" id="goGame" onClick={toGame}>
        Go to Game
      </button>
    </>
  );
}

export default Login;
