import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState("dark");

	const toggleTheme = () => (theme === "dark" ? setTheme("light") : setTheme("dark"));

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
