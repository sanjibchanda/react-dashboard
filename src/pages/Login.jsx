// src/pages/Login.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // If already logged in, redirect to dashboard
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      navigate("/dashboard", { replace: true });
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@example.com" && password === "password") {
      localStorage.setItem("auth", "true");
      navigate("/dashboard", { replace: true });
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="p-4 flex flex-col gap-4 max-w-sm mx-auto mt-20"
    >
      <h1 className="text-2xl font-bold">Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <button type="submit" className="bg-blue-600 text-white py-2 rounded">
        Login
      </button>
    </form>
  );
};

export default Login;
