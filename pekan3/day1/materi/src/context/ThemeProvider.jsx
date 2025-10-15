import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemeProvider({ children }) {
	const [theme, setTheme] = useState("dark");

	const toggleTheme = () => {
		theme === "dark" ? setTheme("light") : setTheme("dark");
	};

	const contextValue = {
		theme,
		toggleTheme,
	};

	return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
}

export default ThemeProvider;
