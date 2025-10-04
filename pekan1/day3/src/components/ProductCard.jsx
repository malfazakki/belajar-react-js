export default function ProductCard({ productName, price, stock, isAvailable }) {
	// let isAvailableComponent;

	// if (props.isAvailable) {
	// 	isAvailableComponent = <p style={{ color: "green" }}>Tersedia</p>;
	// } else {
	// 	isAvailableComponent = <p style={{ color: "red" }}>Produk habis</p>;
	// }

	return (
		<>
			<div
				style={{
					border: "1px solid gray",
					padding: "10px",
					margin: "10px",
					opacity: isAvailable ? "100%" : "30%",
				}}
			>
				{/* Nama Product */}
				<h3>{productName}</h3>
				{/* Harga */}
				<p>{price}</p>
				{/* Stok */}
				<p>{stock}</p>
				{/* Ketersediaan */}
				{/* {isAvailableComponent} */}
				{isAvailable ? (
					<p style={{ color: "green" }}>Tersedia</p>
				) : (
					<p style={{ color: "red" }}>Produk habis</p>
				)}
			</div>
		</>
	);
}
