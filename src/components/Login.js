import React, { useState } from "react";
import { login } from "../services/auth";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            // Redirect or update UI
        } catch (error) {
            console.error("Login failed", error);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
