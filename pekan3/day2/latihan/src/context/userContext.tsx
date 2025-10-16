import { createContext, type ChangeEvent, type FormEvent } from "react";

interface UserContextValue {
	username: string;
	password: string;
	handleChangeUsername: (e: ChangeEvent<HTMLInputElement>) => void;
	handleChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
	handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
	handleLogout: () => void;
}

export const UserContext = createContext<UserContextValue | null>(null);
