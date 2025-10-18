import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import Dashboard from "./pages/Dashboard";
import DashboardProfile from "./pages/Dashboard/DashboardProfile";
import DashboardSettings from "./pages/Dashboard/DashboardSettings";
import "./App.css";

function App() {
	return (
		<>
			<h1>Aplikasi React Router</h1>
			<nav>
				<ul>
					<li>
						<Link to={"/"}>Beranda</Link>
					</li>
					<li>
						<Link to={"/about"}>Tentang</Link>
					</li>
					<li>
						<Link to={"/contact"}>Kontak</Link>
					</li>
					<li>
						<Link to={"/product/1"}>Produk 1</Link>
					</li>
					<li>
						<Link to={"/product/abc"}>Produk ABC</Link>
					</li>
					<li>
						<Link to={"/dashboard"}>Dashboard</Link>
					</li>
				</ul>
			</nav>

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/product/:productId' element={<ProductDetail />} />
				<Route path='/dashboard' element={<Dashboard />}>
					<Route path='profile' element={<DashboardProfile />} />
					<Route path='settings' element={<DashboardSettings />} />
				</Route>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
