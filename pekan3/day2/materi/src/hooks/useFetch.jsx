import { useEffect, useState } from "react";

// Custom Hooks untuk melakukan fetching data berdasarkan url
// @params: url
// url: string
// @return: data, loading, error
// data: any
// loading: boolean
// error: any

export default function useFetch(url) {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			setError(null);

			try {
				const response = await fetch(url);

				if (!response.ok) {
					setError(`HTTP Status Error: ${response.status}`);
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
	}, [url]);

	return { data, loading, error };
}
