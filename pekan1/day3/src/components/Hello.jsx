// object yang bisa diterima adalah:
// name: string
// city: string

export default function Hello(props) {
	return (
		<>
			<h1>Halo, Selamat Datang {props.name}</h1>
			<h2>Asal Saya dari {props.city}</h2>
		</>
	);
}
