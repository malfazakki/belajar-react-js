export default function Alert({ isLoggedIn }) {
	return (
		<div
			style={{
				padding: "20px",
				height: "auto",
				width: "100%",
				backgroundColor: isLoggedIn ? "rgb(0, 152, 0)" : "rgba(255, 0, 0, 1)",
				color: "black",
				display: "flex",
				justifyContent: "center",
			}}
		>
			<p>Selamat Datang</p>
		</div>
	);
}
