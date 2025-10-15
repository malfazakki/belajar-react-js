import { useState } from "react";
import UserContext from "./UserContext";

export default function UserProvider({ children }) {
	const [user, setUser] = useState({
		name: "Guest",
		isLoggedIn: false,
	});

	const handleLogin = (name) => {
		setUser({
			name,
			isLoggedIn: true,
		});
	};

	const handleLogout = () => {
		setUser({
			name: "Guest",
			isLoggedIn: false,
		});
	};

	return (
		<>
			<UserContext.Provider value={{ user, handleLogin, handleLogout }}>{children}</UserContext.Provider>
		</>
	);
}
