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

  return (
    <div className="login-div">
      <h2>Login</h2>
      <label>Nickname:</label>
      <input type="text" onChange={(e) => setNick(e.target.value)}></input>
      <label>Password:</label>
      <input type="password" onChange={(e) => setPass(e.target.value)}></input>
      <p>
        Don't have an account?{" "}
        <span onClick={toSignup} style={{ textDecoration: "underline" }}>
          Sign up
        </span>
      </p>
    </div>
  );
}

export default Login;
