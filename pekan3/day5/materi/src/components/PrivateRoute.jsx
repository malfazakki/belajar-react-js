import { Navigate, Outlet } from "react-router-dom";

// Asumsikan ada cara untuk memeriksa status otentikasi
const isAuthenticated = () => {
	// Logika otentikasi Anda (misalnya, memeriksa token di localStorage)
	return localStorage.getItem("authToken") === "my_secret_token";
};

function PrivateRoute() {
	if (!isAuthenticated()) {
		alert("Silahkan login terlebih dahulu");
		// Jika tidak terautentikasi, arahkan ke halaman login
		return <Navigate to='/login' replace />;
	}
	// Jika terautentikasi, render komponen anak (nested routes)
	return <Outlet />;
}
export default PrivateRoute;
