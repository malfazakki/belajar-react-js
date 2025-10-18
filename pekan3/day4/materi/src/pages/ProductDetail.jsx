import { useParams } from "react-router-dom";

function ProductDetail() {
	const { productId } = useParams();

	return (
		<div>
			<h2>Detail Produk</h2>
			<p>ID Produk: {productId}</p>
			<p>Ini adalah halaman detail untuk produk dengan ID {productId}.</p>
		</div>
	);
}
export default ProductDetail;
