import { useContext } from "react";
import { UserContext } from "../context/userContext";

export default function useUser() {
	const context = useContext(UserContext);

	if (!context) {
		throw new Error("Tidak boleh menggunakan useUser diluar User Provider");
	}

	return context;
}
