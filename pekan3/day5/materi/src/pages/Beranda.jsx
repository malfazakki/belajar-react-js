import CurrentLocation from "../components/CurrentLocation";
import DashboardButton from "../components/DashboardButton";

export default function Beranda() {
	return (
		<>
			<h1>Ini adalah halaman Beranda</h1>

			<DashboardButton />

			<CurrentLocation />
		</>
	);
}
