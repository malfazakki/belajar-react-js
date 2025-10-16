import { useState, type ChangeEvent, type ReactNode } from "react";
import { UserContext } from "./userContext";

export default function UserProvider({ children }: { children: ReactNode }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
		setUsername(e.target.value);
	};

	const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};

	const handleSubmit = () => {
		alert("berhasil login");
		localStorage.setItem("username", username);
	};

	const handleLogout = () => {
		setUsername("");
		localStorage.setItem("username", "");
	};

	return (
		<UserContext.Provider
			value={{
				username,
				password,
				handleChangeUsername,
				handleChangePassword,
				handleSubmit,
				handleLogout,
			}}
		>
			{children}
		</UserContext.Provider>
	);
}
