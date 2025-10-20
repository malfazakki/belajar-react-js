import CurrentLocationInfo from "../components/CurrentLocationInfo";
import DashboardButton from "../components/DashboardButton";

export default function Home() {
	return (
		<>
			<h1>Ini adalah halaman Beranda</h1>

			<DashboardButton />

			<CurrentLocationInfo />
		</>
	);
}
