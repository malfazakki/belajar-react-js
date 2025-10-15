import "./App.css";
import Calculator from "./components/Calculator";
import CounterWithReducer from "./components/CounterWithReducer";
import ThemedButton from "./components/ThemedButton";
import ThemedParagraph from "./components/ThemedParagraph";
import Toolbar from "./components/Toolbar";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
	// const user = {
	// 	name: "Muzakki",
	// 	theme: "dark",
	// };

	return (
		<>
			{/* <Calculator /> */}
			{/* <Toolbar user={user} /> */}
			{/* <CounterWithReducer /> */}

			<ThemeProvider>
				<ThemedButton />
				<ThemedParagraph />
			</ThemeProvider>
		</>
	);
}

export default App;
