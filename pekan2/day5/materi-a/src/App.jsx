import "./App.css";
import Calculator from "./components/Calculator";
import CounterWithReducer from "./components/CounterWithReducer";
import ThemedButton from "./components/ThemedButton";
import ThemedParagraph from "./components/ThemedParagraph";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
	return (
		<>
			{/* <Calculator /> */}
			{/* <CounterWithReducer /> */}

			<ThemeProvider>
				<ThemedButton />
				<ThemedParagraph />
			</ThemeProvider>
		</>
	);
}

export default App;
