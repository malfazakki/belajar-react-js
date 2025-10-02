import "./App.css";

function App() {
	// const numbers = [1, 2, 3, 4, 5];
	// const names = ["Naufal", "Lexy", "Baja", "Luthfi"];

	// const products = [
	// 	{ id: 1, name: "Laptop", price: 12000000 },
	// 	{ id: 2, name: "Mouse", price: 250000 },
	// 	{ id: 3, name: "Keyboard", price: 750000 },
	// 	{ id: 4, name: "Headset", price: 500000 },
	// 	{ id: 5, name: "MousePad", price: 100000 },
	// ];

	const profiles = [
		{
			id: 1,
			name: "Ayyas",
			imageUrl: "https://images.pexels.com/photos/9072338/pexels-photo-9072338.jpeg",
			angkatan: 22,
		},
		{
			id: 2,
			name: "Ayyas",
			imageUrl: "https://images.pexels.com/photos/9072338/pexels-photo-9072338.jpeg",
			angkatan: 22,
		},
		{
			id: 3,
			name: "Ayyas",
			imageUrl: "https://images.pexels.com/photos/9072338/pexels-photo-9072338.jpeg",
			angkatan: 22,
		},
		{
			id: 4,
			name: "Ayyas",
			imageUrl: "https://images.pexels.com/photos/9072338/pexels-photo-9072338.jpeg",
			angkatan: 22,
		},
	];

	return (
		<>
			<div
				style={{
					display: "flex",
					gap: "20px",
				}}
			>
				{profiles.map((profile) => (
					<div key={profile.id}>
						<div
							style={{
								padding: "15px",
								backgroundColor: "#eee",
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<div>
								<img
									src={profile.imageUrl}
									style={{
										width: "auto",
										height: "200px",
										objectFit: "cover",
									}}
								/>
							</div>
							<div>
								<p>{profile.name}</p>
								<p>{profile.angkatan}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
}

export default App;
