import { useEffect, useState } from "react";

export default function AbortFetchComponent() {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const abortController = new AbortController();
		const signal = AbortController.signal;

		const fetchData = async () => {
			setLoading(true);

			try {
				const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", { signal });

				if (!response.ok) {
					throw new Error(`HTTP Error, status: ${response.status}`);
				}

				const result = await response.json();

				setData(result);
			} catch (err) {
				if (err.name === "AbortError") {
					console.log("fetch dibatalkan");
				}

				setError(err);
			} finally {
				setLoading(false);
			}
		};

		fetchData();

		return () => {
			abortController.abort();
			console.log("fetching data dibatalkan");
		};
	}, []);

	if (loading) return <p>Sedang memuat data...</p>;
	if (!data) return <p>User tidak ditemukan.</p>;
	if (error) return <p>{error.message}</p>;

	return (
		<>
			<h2>Data dari Fetch API (Dengan Abort Controller)</h2>
			<p>{data.title}</p>
			<p>{data.body}</p>
		</>
	);
}
