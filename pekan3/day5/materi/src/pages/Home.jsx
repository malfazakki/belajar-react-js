import CurrentLocation from "../components/CurrentLocation";
import DashboardButton from "../components/DashboardButton";
import { ErrorBoundary } from "../components/ErrorBoundary";

export default function Home() {
	return (
		<>
			<ErrorBoundary>
				<h1>Ini adalah halaman home</h1>

				<button
					onClick={() => {
						throw new Error("Saya adalah error yang disengaja!");
					}}
				>
					Klik Bug
				</button>

				<DashboardButton />

				<CurrentLocation />
			</ErrorBoundary>
		</>
	);
}
