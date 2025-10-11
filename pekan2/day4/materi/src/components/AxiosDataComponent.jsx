import { useEffect, useState } from "react";
import axios from "axios";

export default function AxiosDataComponent() {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading(true);

		const fetchData = async () => {
			try {
				const response = await axios.get("https://jsonplaceholder.typicode.com/users/0");

				setData(response.data);
			} catch (err) {
				setError(err);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	if (loading) return <p>Sedang memuat data...</p>;
	if (!data) return <p>User tidak ditemukan.</p>;
	if (error) return <p>Terjadi kesalahan.</p>;

	return (
		<>
			<h2>Data dari Axios</h2>

			<br />

			<p>{data.name}</p>
			<p>Email: {data.email}</p>
			<p>Telfon: {data.phone}</p>
		</>
	);
}
