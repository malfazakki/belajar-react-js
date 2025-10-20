import { useLocation } from "react-router-dom";

export default function CurrentLocation() {
	const location = useLocation();

	return (
		<>
			<h3>Informasi lokasi halaman saat ini: </h3>

			<p>Pathname: {location.pathname}</p>
			<p>Hash: {location.hash}</p>
			{location.state && <p>State: {JSON.stringify(location.state)}</p>}
		</>
	);
}
