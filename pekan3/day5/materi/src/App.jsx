import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Beranda from "./pages/Beranda";
import Dashboard from "./pages/Dashboard";

import "./App.css";
import LoginForm from "./pages/LoginForm";
import PrivateRoute from "./components/PrivateRoute";
import { ErrorBoundary } from "./components/ErrorBoundary";

function App() {
	return (
		<>
			<Routes>
				{/* Route to Home */}
				<Route path={"/"} element={<Home />} />

				{/* Route to Login Form */}
				<Route path={"/login"} element={<LoginForm />} />

				<Route element={<PrivateRoute />}>
					{/* Route to Beranda */}
					<Route path={"/beranda"} element={<Beranda />} />
					{/* Route to Dashboard */}
					<Route path={"/dashboard"} element={<Dashboard />} />
				</Route>

				<Route path='*' element={<p>Halaman tidak ditemukan</p>} />
			</Routes>
		</>
	);
}

export default App;
