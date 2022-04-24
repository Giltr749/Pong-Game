import React, { useState } from "react";
import "./Signup.css";

function Signup(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [nick, setNick] = useState("");

  function handleClick() {
    let user = {};
    if (isValid) {
      user.email = email;
      user.password = password;
      user.fname = first;
      user.lname = last;
      user.nickname = nick;
      console.log(user);
      signup(user);
    } else {
      return false;
    }
  }

  function isValid() {
    if (
      email.length > 0 &&
      password.length > 0 &&
      checkPassword == password &&
      nick.length > 0
    )
      return true;
    return false;
  }

  async function signup(user) {
    const response = await fetch("http://localhost:8080/signup", {
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
    <div className="signup-div">
      <label>Email*</label>
      <input
        type="email"
        className="input"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Password*</label>
      <input
        type={"password"}
        className="input"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <label>Re-enter Password*</label>
      <input
        type={"password"}
        className="input"
        onChange={(e) => {
          setCheckPassword(e.target.value);
        }}
      />
      <label>First Name</label>
      <input
        type={"text"}
        className="input"
        onChange={(e) => {
          setFirst(e.target.value);
        }}
      />
      <label>Last Name</label>
      <input
        type={"text"}
        className="input"
        onChange={(e) => {
          setLast(e.target.value);
        }}
      />
      <label>Nickname</label>
      <input
        type={"text"}
        className="input"
        onChange={(e) => {
          setNick(e.target.value);
        }}
      />
      <p>{handleClick === false ? "Invalid Input" : ""}</p>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default Signup;
