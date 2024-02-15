import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "./Auth";

const Login = () => {
  const { login, setName } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleForm = () => {
    if (username === "") {
      alert("Please Provide Username");
    } else if (password === "") {
      alert("Please provide Password");
    } else if (password.length < 6) {
      alert("Provide password of atleast six characters");
    } else {
      if (username === "admin" && password === "123456") {
        setName(username);
        login();
        navigate("/game");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-10 bg-slate-300">
      <div className="text-7xl font-bold text-blue-600">Login</div>
      <form className="flex flex-col gap-4 border  border-blue-300 lg:p-10  text-3xl">
        <label htmlFor="username" className="font-semibold">
          UserName
        </label>
        <input
          className="rounded-2xl p-2"
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

        <label htmlFor="password" className="font-semibold">
          Password
        </label>
        <input
          className="rounded-2xl p-2"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleForm}
          type="button"
          className="bg-red-200 rounded-2xl hover:scale-110 font-semibold py-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
