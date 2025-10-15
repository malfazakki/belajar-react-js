import { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import UserContext from "../context/UserContext";
import useTheme from "../context/ThemeContext";

export default function Home() {
	const { user, handleLogin, handleLogout } = useContext(UserContext);

	const { theme } = useTheme();

	const [username, setUsername] = useState("");

	return (
		<>
			<Navbar />
			<main
				style={{
					paddingTop: "80px",
					height: "1000vh",
					textAlign: "center",
					backgroundColor: theme === "light" ? "#fff" : "#211832",
				}}
			>
				{user.name && (
					<p style={{ fontSize: "20px", color: theme === "light" ? "#000" : "#F25912" }}>
						Selamat Datang, <span style={{ fontWeight: "600" }}>{user.name}</span>
					</p>
				)}

				<div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
					{!user.isLoggedIn && (
						<input
							type='text'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							placeholder='Input your name'
						/>
					)}

					<button
						style={{
							padding: "10px 35px",
							backgroundColor: theme === "light" ? "#412B6B" : "#F25912",
							color: "#eee",
							border: "none",
							borderRadius: "8px",
							cursor: "pointer",
						}}
						onClick={() => {
							if (!user.isLoggedIn) {
								handleLogin(username);
							} else {
								handleLogout();
							}
						}}
					>
						{user.isLoggedIn ? "Logout" : "Login"}
					</button>
				</div>
			</main>
		</>
	);
}
