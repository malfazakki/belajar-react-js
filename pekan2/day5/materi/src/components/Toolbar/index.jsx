import Profile from "./Profile";

export default function Toolbar({ user }) {
	return (
		<>
			<Profile user={user} />
		</>
	);
}
