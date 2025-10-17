import useFriendStatus from "../hooks/useFriendStatus";

export default function FriendStatus({ friendId }) {
	const isOnline = useFriendStatus({ friendId });

	if (isOnline === null) {
		return <p>Memuat...</p>;
	}

	return (
		<>
			<p>{isOnline ? "Online" : "Offline"}</p>
		</>
	);
}
