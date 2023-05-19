import React, { useState } from "react";
import BgLogin from "../assets/bg-login.svg";
import { FaInstagram, FaGoogle } from "react-icons/fa";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  // (e) = receber o evento como parâmetro na função arrow

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <img className="image" src={BgLogin} alt="Background" />
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <div>
            <p>Username</p>
            <label htmlFor="username"></label>
            <input
              type="text"
              id="username"
              placeholder="Username here"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div>
            <p>Password</p>
            <label htmlFor="password"></label>
            <input
              type="password"
              id="password"
              placeholder="Password here"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit">Login</button>
          <div className="icons">
            <FaGoogle className="icon" />
            <FaInstagram className="icon" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
