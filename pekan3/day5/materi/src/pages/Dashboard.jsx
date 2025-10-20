import CurrentLocation from "../components/CurrentLocation";
import DashboardButton from "../components/DashboardButton";

export default function Dashboard() {
	return (
		<>
			<h1>Ini adalah halaman Dashboard</h1>

			<DashboardButton />

			<CurrentLocation />
		</>
	);
}
