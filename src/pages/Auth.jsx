import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../store";
import { useNavigate } from "react-router-dom";

function Auth() {
  const [username, setUsername] = useState("kminchelle");
  const [password, setPassword] = useState("0lelplR");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://dummyjson.com/auth/login", {
        username,
        password,
      });
      dispatch(login(res.data));
      navigate("/profile");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <form onSubmit={handleLogin} className="max-w-sm mx-auto mt-8 p-4 bg-white shadow rounded">
      <h1 className="text-xl mb-4">Login</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border w-full p-2 mb-2"
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border w-full p-2 mb-2"
        placeholder="Password"
      />
      <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded">
        Login
      </button>
    </form>
  );
}

export default Auth;
