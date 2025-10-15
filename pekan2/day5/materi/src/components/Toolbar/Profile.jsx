export default function Profile({ user }) {
	return (
		<>
			<p>Nama: {user.name}</p>
			<p>Tema saat ini: {user.theme}</p>
		</>
	);
}
