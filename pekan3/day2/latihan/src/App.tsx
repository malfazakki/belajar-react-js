import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
	const username = localStorage.getItem("username");

	console.log(username);

	return <>{username ? <Home /> : <Login />}</>;
}

export default App;
