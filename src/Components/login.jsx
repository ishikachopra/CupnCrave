import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [showLoginForm, setShowLoginForm] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate(); // Initialize navigate

    const toggleForm = () => {
        setShowLoginForm(!showLoginForm);
        setMessage("");
    };

    const handleRegister = (e) => {
        e.preventDefault();
        if (!username || !email || !password) {
            setMessage("All fields are required for registration.");
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];
        if (users.find(user => user.username === username)) {
            setMessage("Username already exists.");
            return;
        }

        users.push({ username, email, password });
        localStorage.setItem("users", JSON.stringify(users));
        setMessage("Registration successful! Please login.");
        setShowLoginForm(true);
        setUsername("");
        setPassword("");
        setEmail("");
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (!username || !password) {
            setMessage("Both fields are required for login.");
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(user => user.username === username && user.password === password);
        if (user) {
            setMessage("Login successful!");
            setTimeout(() => {
                navigate("/"); // Navigate to home page after 2 seconds
            }, 1000);
        } else {
            setMessage("Invalid username or password.");
        }
    };

    return (
        <>
                <div className="login-container">
                    <div className="login-btn">
                        <span onClick={toggleForm}>Login</span>
                        <span onClick={toggleForm}>Register</span>
                        <hr className={showLoginForm ? "indicator" : ""} />
                    </div>
                    {message && <p>{message}</p>}
                    {showLoginForm ? (
                        <form onSubmit={handleLogin}>
                            <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button type="submit" className="loginbtn">Login</button>
                            <a href="https://www.google.com">Forgot Password?</a>
                        </form>
                    ) : (
                        <form onSubmit={handleRegister}>
                            <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button type="submit" className="loginbtn">Register</button>
                        </form>
                    )}
                </div>
        </>
    );
}

export default Login;
