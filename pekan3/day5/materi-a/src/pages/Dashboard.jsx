import CurrentLocationInfo from "../components/CurrentLocationInfo";
import DashboardButton from "../components/DashboardButton";

export default function Dashboard() {
	return (
		<>
			<h1>Ini adalah halaman Dashboard</h1>

			<DashboardButton />

			<CurrentLocationInfo />
		</>
	);
}
