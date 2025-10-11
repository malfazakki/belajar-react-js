import "./App.css";
import MultiEffectComponent from "./components/MultiEffectComponent";
import Timer from "./components/Timer";
import UserProfile from "./components/UserProfile";
import WindowSizeTracker from "./components/WindowSizeTracker";

// import { useState } from "react";

function App() {
	// const [userId, setUserId] = useState(1);

	return (
		<>
			{/* <Timer /> */}
			{/* <h1>Aplikasi Profile Sederhana</h1>
			<br />
			<UserProfile userId={userId} />
			<button onClick={() => setUserId(userId + 1)}>Lihat Pengguna Berikutnya</button> */}

			{/* <WindowSizeTracker /> */}
			<MultiEffectComponent />
		</>
	);
}

export default App;
