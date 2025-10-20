import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		// Simulasi proses login
		if (username === "user" && password === "pass") {
			// const authToken = generateRandomToken();
			const authToken = "my_secret_token";
			localStorage.setItem("authToken", authToken);

			alert("Login Berhasil!");
			// Navigasi ke halaman dashboard setelah login berhasil
			navigate("/dashboard", { state: { fromLogin: true } }); // Meneruskan state tambahan
		} else {
			alert("Username atau password salah!");
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Login</h2>
			<div>
				<label>Username:</label>
				<input type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
			</div>
			<div>
				<label>Password:</label>
				<input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
			</div>
			<button type='submit'>Login</button>
		</form>
	);
}
export default LoginForm;
