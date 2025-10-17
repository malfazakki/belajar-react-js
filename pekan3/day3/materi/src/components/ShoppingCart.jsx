import { useCallback, useState } from "react";
import ExpensiveChild from "./ExpensiveChild";

export default function ShoppingCart() {
	const [cart, setCart] = useState([]);
	const [otherState, setOtherState] = useState(0);

	// const handleAddToCart = useCallback((product) => {
	// 	console.log(`🛒 Menambahkan ${product.name} ke keranjang`);
	// 	setCart((prevCart) => [...prevCart, product]);
	// }, []);

	const handleAddToCart = (product) => {
		console.log(`🛒 Menambahkan ${product.name} ke keranjang`);
		setCart((prevCart) => [...prevCart, product]);
	};

	const clearCart = useCallback(() => {
		setCart([]);
	}, []);

	return (
		<>
			<h2>Contoh useCallback</h2>

			<button onClick={() => setOtherState(otherState + 1)}>Update Other State (Count: {otherState})</button>

			<button onClick={clearCart}>Clear Cart</button>

			<div style={{ display: "flex", gap: "20px" }}>
				<div style={{ flex: 1 }}>
					<h3>Produk Tersedia</h3>
					{sampleProducts.map((product) => (
						<ExpensiveChild key={product.id} product={product} onAddToCart={handleAddToCart} />
					))}
				</div>

				<div style={{ flex: 1 }}>
					<h3>Keranjang Belanja ({cart.length} item)</h3>
					{cart.map((item, index) => (
						<div key={index} style={{ padding: "5px", backgroundColor: "#f0f0f0", color: "#999" }}>
							{item.name} - Rp {item.price.toLocaleString()}
						</div>
					))}
				</div>
			</div>
		</>
	);
}

const sampleProducts = [
	{ id: 1, name: "Laptop Gaming", price: 15000000, rating: 4.5 },
	{ id: 2, name: "Smartphone", price: 5000000, rating: 4.2 },
	{ id: 3, name: "Headphone", price: 800000, rating: 4.8 },
	{ id: 4, name: "Mouse Wireless", price: 200000, rating: 4.0 },
	{ id: 5, name: "Keyboard Mechanical", price: 1200000, rating: 4.6 },
];
