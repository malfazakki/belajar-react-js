import { createContext, useContext } from "react";

export const ThemeContext = createContext("dark");

export default function useTheme() {
	const context = useContext(ThemeContext);

	if (context === undefined) {
		throw new Error("Tidak boleh menggunakan useTheme diluar Theme Provider");
	}

	return context;
}
