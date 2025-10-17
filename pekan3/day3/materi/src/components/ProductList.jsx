import { useState } from "react";

export default function ProductList({ products, searchTerm }) {
	const [sortBy, setSortBy] = useState("name");

	// const filteredAndSortedProducts = useMemo(() => {
	// 	console.log("memulai perhitungan");

	// 	let filtered = products.filter((product) => {
	// 		return product.name.toLowerCase().includes(searchTerm.toLowerCase());
	// 	});

	// 	filtered.sort((a, b) => {
	// 		if (sortBy === "name") {
	// 			return a.name.localeCompare(b.name);
	// 		} else if (sortBy === "price") {
	// 			return a.price - b.price;
	// 		} else if (sortBy === "rating") {
	// 			return a.rating - b.rating;
	// 		}

	// 		return 0;
	// 	});

	// 	return filtered;
	// }, [products, searchTerm, sortBy]);

	console.log("memulai perhitungan");

	const filteredAndSortedProducts = products
		.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
		.sort((a, b) => {
			if (sortBy === "name") return a.name.localeCompare(b.name);
			if (sortBy === "price") return a.price - b.price;
			if (sortBy === "rating") return b.rating - a.rating;
			return 0;
		});

	return (
		<>
			<div>
				<h3>Daftar Products</h3>
				<select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
					<option value='name'>Nama</option>
					<option value='price'>Harga</option>
					<option value='rating'>Rating</option>
				</select>
			</div>

			<div>
				{filteredAndSortedProducts.map((product) => {
					return (
						<>
							<div key={product.id} style={{ border: "1px solid #ccc", margin: "5px", padding: "10px" }}>
								<h4>{product.name}</h4>
								<p>Harga: Rp {product.price.toLocaleString()}</p>
								<p>Rating: {product.rating}/5</p>
							</div>
						</>
					);
				})}
			</div>
		</>
	);
}
