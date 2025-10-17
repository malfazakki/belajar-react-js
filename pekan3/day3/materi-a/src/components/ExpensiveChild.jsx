import { memo } from "react";

// Komponen Anak yang di-memoize
const ExpensiveChild = memo(({ onAddToCart, product }) => {
	console.log(`🔄 ExpensiveChild untuk ${product.name} di-render`);

	return (
		<div style={{ border: "1px solid #ddd", padding: "10px", margin: "5px" }}>
			<h4>{product.name}</h4>
			<p>Harga: Rp {product.price.toLocaleString()}</p>
			<button onClick={() => onAddToCart(product)}>Tambah ke Keranjang</button>
		</div>
	);
});

export default ExpensiveChild;
