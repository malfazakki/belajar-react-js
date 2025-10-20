import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import LoginForm from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import { ErrorBoundary } from "./components/ErrorBoundary";

function App() {
	return (
		<ErrorBoundary>
			<Routes>
				<Route path={"/"} element={<Home />} />

				<Route path='/login' element={<LoginForm />} />

				<Route element={<PrivateRoute />}>
					<Route path={"/dashboard"} element={<Dashboard />} />
				</Route>

				<Route path={"*"} element={<p>Halaman tidak ditemukan</p>} />
			</Routes>
		</ErrorBoundary>
	);
}

export default App;
