import axios from "axios";
import { useEffect, useState } from "react";

export default function UserListManipulated() {
	const [users, setUsers] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading(true);

		const fetchData = async () => {
			try {
				const response = await axios.get("https://jsonplaceholder.typicode.com/users");

				const processedUsers = response.data
					.map((user) => ({
						id: user.id,
						name: user.name,
						email: user.email,
						city: user.address.city,
					}))
					.filter((user) => user.city === "Gwenborough");

				setUsers(processedUsers);
			} catch (err) {
				setError(err);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	console.log(users);

	if (loading) return <p>Sedang memuat data...</p>;
	if (!users) return <p>User tidak ditemukan.</p>;
	if (error) return <p>Terjadi kesalahan.</p>;

	return (
		<>
			<h2>List Users</h2>

			<ul>
				{users.map((user) => (
					<li key={user.id}>
						{user.name} - {user.city}
					</li>
				))}
			</ul>
		</>
	);
}
