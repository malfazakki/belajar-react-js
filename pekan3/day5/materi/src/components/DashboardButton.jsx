import { useNavigate } from "react-router-dom";

export default function DashboardButton() {
	const navigate = useNavigate();

	const handleToDashboard = () => {
		navigate("/dashboard");
	};

	const handleToBeranda = () => {
		navigate("/beranda", { replace: true });
	};

	const goBack = () => {
		navigate(-1); // Kembali ke halaman sebelumnya
	};

	const handleLogout = () => {
		localStorage.removeItem("authToken");
		navigate("/login");
	};

	return (
		<>
			<button onClick={handleToDashboard}>Pergi ke Dashboard</button>
			<button onClick={handleToBeranda}>Pergi ke Beranda</button>
			<button onClick={goBack}>Kembali</button>
			<button onClick={handleLogout}>Logout</button>
		</>
	);
}
