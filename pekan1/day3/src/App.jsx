import ProductCard from "./components/ProductCard";

function App() {
	return (
		<>
			{/* <ProductCard productName={"Laptop Gaming"} price={12000000} stock={100} isAvailable={true} />
			<ProductCard productName={"Mouse Gaming"} price={50000} stock={50} isAvailable={true} />
			<ProductCard
				productName={"Keyboard Mechanical White Switch"}
				price={800000}
				stock={70}
				isAvailable={true}
			/> */}
			{products.map((product) => (
				<ProductCard
					productName={product.productName}
					price={product.price}
					stock={product.stock}
					isAvailable={product.isAvailable}
				/>
			))}
		</>
	);
}

export default App;

const products = [
	{
		id: 1,
		productName: "Laptop Gaming",
		price: 12000000,
		stock: 100,
		isAvailable: true,
	},
	{
		id: 2,
		productName: "Mouse Gaming",
		price: 500000,
		stock: 100,
		isAvailable: true,
	},
	{
		id: 3,
		productName: "Keyboard Mechanical",
		price: 800000,
		stock: 100,
		isAvailable: true,
	},
	{
		id: 4,
		productName: "Headset Bluetooth 5.3",
		price: 500000,
		stock: 0,
		isAvailable: false,
	},
];
