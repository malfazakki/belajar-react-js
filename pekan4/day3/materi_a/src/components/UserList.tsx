import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../app/store";
import { useEffect } from "react";
import { fetchUsers } from "../features/users/usersSlice";

export default function UserList() {
	const users = useSelector((state: RootState) => state.users.list);
	const status = useSelector((state: RootState) => state.users.status);
	const error = useSelector((state: RootState) => state.users.error);

	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		// Dispatch async thunk saat komponen pertama kali di-mount
		if (status === "idle") {
			dispatch(fetchUsers());
		}
	}, [status, dispatch]);

	if (status === "loading") {
		return <div>Memuat pengguna...</div>;
	}

	if (status === "failed") {
		return <div>Error: {error}</div>;
	}

	return (
		<div style={{ textAlign: "center", marginTop: "20px" }}>
			<h2>Daftar Pengguna</h2>
			<ul>
				{users.map((user) => (
					<li key={user.id}>
						{user.name} ({user.email})
					</li>
				))}
			</ul>
		</div>
	);
}
