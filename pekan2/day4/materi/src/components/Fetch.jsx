import { useEffect, useState } from "react";

export default function Fetch() {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

				if (!response.ok) {
					throw new Error(`HTTP Error, Status: ${response.status}`);
				}

				const result = await response.json();
				setData(result);
			} catch (err) {
				setError(err);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	if (loading) return <p>Sedang memuat data...</p>;
	if (!data) return <p>Artikel tidak ditemukan.</p>;
	if (error) return <p>Terjadi Kesalahan.</p>;

	return (
		<>
			<h1>Praktek Fetching Data menggunakan Fetch</h1>
			<p>{data.title}</p>
			<p>{data.body}</p>
		</>
	);
}
