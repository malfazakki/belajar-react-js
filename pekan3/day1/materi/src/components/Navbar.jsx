import { useContext } from "react";
import UserContext from "../context/UserContext";
import ThemedButton from "./ThemedButton";
import useTheme from "../context/ThemeContext";

export default function Navbar() {
	const { user } = useContext(UserContext);
	const { theme } = useTheme();

	return (
		<>
			<div
				style={{
					width: "100%",
					position: "fixed",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					backgroundColor: theme === "light" ? "#5C3E94" : "#F25912",
					top: 0,
					right: 0,
					left: 0,
					padding: "15px 10px 15px 10px",
				}}
			>
				<div style={{ display: "flex", gap: "15px" }}>
					<div style={{ height: "50px", width: "50px", borderRadius: "50px" }}>
						<img
							src={"https://cdn-icons-png.flaticon.com/512/6858/6858504.png"}
							alt='avatar'
							style={{ width: "100%", height: "auto", objectFit: "cover" }}
						/>
					</div>
					<p style={{ fontWeight: "600", color: theme === "light" ? "#F25912" : "#5C3E94" }}>{user.name}</p>
				</div>

				<div style={{ paddingRight: "20px" }}>
					<ThemedButton />
				</div>
			</div>
		</>
	);
}
