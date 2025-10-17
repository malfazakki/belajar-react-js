import useFriendStatus from "../hooks/useFriendStatus";

export default function UserStatus() {
	const isOnline = useFriendStatus(0);

	if (isOnline === null) {
		return <p>Memuat...</p>;
	}

	return (
		<>
			<p>{isOnline ? "Anda Online" : "Anda Offline"}</p>
		</>
	);
}
