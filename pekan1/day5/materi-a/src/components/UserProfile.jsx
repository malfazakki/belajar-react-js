import { useState } from "react";

export default function UserProfile() {
	const [name, setName] = useState("");
	const [age, setAge] = useState(0);
	const [isEditing, setIsEditing] = useState(false);

	// ternary condition
	// condition ? true : false

	return (
		<>
			<div>
				<h1>Profil Pengguna</h1>

				{isEditing ? (
					<div style={{ display: "grid", gap: "15px" }}>
						<div style={{ display: "grid", gap: "5px" }}>
							<label htmlFor='username'>Nama Pengguna</label>
							<input
								type='text'
								value={name}
								onChange={(e) => {
									setName(e.target.value);
								}}
							/>
						</div>

						<div style={{ display: "grid", gap: "5px" }}>
							<label htmlFor='age'>Umur</label>
							<input type='number' value={age} onChange={(e) => setAge(e.target.value)} />
						</div>

						<button
							onClick={() => {
								setIsEditing(false);
							}}
							style={{
								marginTop: "25px",
								backgroundColor: "green",
								border: 0,
								padding: "3px 10px",
								borderRadius: "5px",
							}}
						>
							Simpan
						</button>
					</div>
				) : (
					<div style={{ display: "grid" }}>
						<p>Nama Pengguna: {name}</p>
						<p>Umur Pengguna: {age}</p>
						<button
							onClick={() => {
								setIsEditing(true);
							}}
							style={{
								marginTop: "25px",
								backgroundColor: "green",
								border: 0,
								padding: "3px 10px",
								borderRadius: "5px",
							}}
						>
							Edit
						</button>
					</div>
				)}
			</div>
		</>
	);
}
