import { useEffect, useState } from "react";
import "./App.css";
import MultiEffectComponent from "./components/MultiEffectComponent";

function Timer() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		console.log("Timer dimulai");
		const intervalId = setInterval(() => {
			setCount((prevCount) => prevCount + 1);
		}, 1000);

		return () => {
			clearInterval(intervalId);
			console.log("Timer dibersihkan");
		};
	}, []);

	return (
		<>
			<h2>Timer: {count} detik</h2>
		</>
	);
}

function UserProfile({ userId }) {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		console.log(`Fetching user data for userId: ${userId}`);

		fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
			.then((response) => response.json())
			.then((data) => {
				console.log("data user: ", data);
				setUser(data);
				setLoading(false);
			})
			.catch((error) => {
				console.error("Error fetching data user: ", error);
				setLoading(false);
			});
	}, [userId]);

	if (loading) return <p>Sedang memuat data...</p>;
	if (!user) return <p>Pengguna tidak ditemukan.</p>;

	return (
		<>
			<h2>Profile Pengguna</h2>
			<p>Nama: {user.name}</p>
			<p>Email: {user.email}</p>
		</>
	);
}

function App() {
	// const [userId, setUserId] = useState(1);

	return (
		<>
			{/* <h1>Aplikasi Profile Pengguna</h1>
			<UserProfile userId={userId} />
			<button
				onClick={() => {
					setUserId((prev) => prev + 1);
				}}
			>
				Lihat Pengguna Berikutnya
			</button> */}

			<MultiEffectComponent />
		</>
	);
}

export default App;
