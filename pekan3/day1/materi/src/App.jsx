import "./App.css";
import ThemeProvider from "./context/ThemeProvider";
import UserProvider from "./context/UserProvider";
import Home from "./pages/Home";

function App() {
	return (
		<>
			<UserProvider>
				<ThemeProvider>
					<Home />
				</ThemeProvider>
			</UserProvider>
		</>
	);
}

export default App;
