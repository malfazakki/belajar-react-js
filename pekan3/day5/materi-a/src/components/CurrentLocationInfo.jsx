import { useLocation } from "react-router-dom";

export default function CurrentLocationInfo() {
	const location = useLocation();

	return (
		<>
			<h3>Informasi lokasi halaman saat ini:</h3>

			<p>Pathname: {location.pathname}</p>
		</>
	);
}
