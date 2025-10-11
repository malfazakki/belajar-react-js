import { useEffect, useState } from "react";

export default function UserProfile({ userId }) {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);

		fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
			.then((response) => response.json())
			.then((data) => {
				console.log("data: ", data);
				setUser(data);
				setLoading(false);
			})
			.catch((error) => {
				console.error(`Error fetching user data: ${error}`);
				setLoading(false);
			});
	}, [userId]);

	if (loading) return <p>Sedang Memuat Halaman....</p>;
	if (!user) return <p>Pengguna tidak ditemukan.</p>;

	return (
		<>
			<h2>Profile Pengguna</h2>
			<p>Nama: {user.name}</p>
			<p>Email: {user.email}</p>
		</>
	);
}
