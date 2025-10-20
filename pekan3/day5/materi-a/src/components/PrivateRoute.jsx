import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
	const isAuthenticated = localStorage.getItem("authToken") !== null;

	if (isAuthenticated) {
		return <Outlet />;
	} else {
		alert("Silahkan login terlebih dahulu");

		return <Navigate to={"/login"} replace />;
	}
}
