import { useCallback, useState } from "react";
import ExpensiveChild from "./ExpensiveChild";

export default function ShoppingCart() {
	const [cart, setCart] = useState([]);
	const [otherState, setOtherState] = useState(0);

	const handleAddToCart = useCallback((product) => {
		console.log(`🛒 Menambahkan ${product.name} ke keranjang`);
		setCart((prevCart) => [...prevCart, product]);
	}, []);

	// Spread Operator
	// Object & Array

	// const handleAddToCart = (product) => {
	// 	console.log(`🛒 Menambahkan ${product.name} ke keranjang`);
	// 	setCart((prevCart) => [...prevCart, product]);
	// };

	const clearCart = useCallback(() => {
		setCart([]);
	}, []);

	return (
		<>
			<div style={{ padding: "20px" }}>
				<h2>Contoh useCallback</h2>

				<button onClick={() => setOtherState(otherState + 1)}>Tambah State Lain (Count: {otherState})</button>

				<button onClick={clearCart}>Clear Cart</button>

				<div style={{ display: "flex", gap: "20px" }}>
					<div style={{ flex: 1 }}>
						<h3>Produk tersedia</h3>
						{sampleProducts.map((product) => {
							return <ExpensiveChild key={product.id} product={product} onAddToCart={handleAddToCart} />;
						})}
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
			</div>
		</>
	);
}

// Contoh data produk
const sampleProducts = [
	{ id: 1, name: "Laptop Gaming", price: 15000000, rating: 4.5 },
	{ id: 2, name: "Smartphone", price: 5000000, rating: 4.2 },
	{ id: 3, name: "Headphone", price: 800000, rating: 4.8 },
	{ id: 4, name: "Mouse Wireless", price: 200000, rating: 4.0 },
	{ id: 5, name: "Keyboard Mechanical", price: 1200000, rating: 4.6 },
	{ id: 6, name: "Monitor 4K", price: 8000000, rating: 4.3 },
	{ id: 7, name: "Tablet Android", price: 3500000, rating: 4.1 },
	{ id: 8, name: "Smartwatch", price: 2500000, rating: 4.4 },
	{ id: 9, name: "Bluetooth Speaker", price: 750000, rating: 4.2 },
	{ id: 10, name: "Webcam HD", price: 450000, rating: 3.9 },
	{ id: 11, name: "External Hard Drive", price: 1200000, rating: 4.6 },
	{ id: 12, name: "USB Flash Drive", price: 150000, rating: 4.0 },
	{ id: 13, name: "Wireless Router", price: 950000, rating: 4.3 },
	{ id: 14, name: "Graphics Card", price: 7500000, rating: 4.7 },
	{ id: 15, name: "RAM DDR4 16GB", price: 1800000, rating: 4.5 },
	{ id: 16, name: "SSD 1TB", price: 2200000, rating: 4.8 },
	{ id: 17, name: "Motherboard Gaming", price: 3200000, rating: 4.4 },
	{ id: 18, name: "Power Supply 750W", price: 1500000, rating: 4.2 },
	{ id: 19, name: "CPU Intel i7", price: 5500000, rating: 4.6 },
	{ id: 20, name: "Cooling Fan RGB", price: 350000, rating: 4.1 },
	{ id: 21, name: "T-Shirt Cotton", price: 150000, rating: 4.3 },
	{ id: 22, name: "Jeans Denim", price: 450000, rating: 4.2 },
	{ id: 23, name: "Sneakers Sports", price: 850000, rating: 4.4 },
	{ id: 24, name: "Jacket Leather", price: 1200000, rating: 4.5 },
	{ id: 25, name: "Dress Casual", price: 350000, rating: 4.1 },
	{ id: 26, name: "Shorts Summer", price: 200000, rating: 3.9 },
	{ id: 27, name: "Hoodie Cotton", price: 400000, rating: 4.3 },
	{ id: 28, name: "Socks Pack", price: 75000, rating: 4.0 },
	{ id: 29, name: "Belt Leather", price: 180000, rating: 4.2 },
	{ id: 30, name: "Cap Baseball", price: 120000, rating: 3.8 },
	{ id: 31, name: "Watch Analog", price: 950000, rating: 4.4 },
	{ id: 32, name: "Sunglasses", price: 250000, rating: 4.1 },
	{ id: 33, name: "Backpack School", price: 320000, rating: 4.3 },
	{ id: 34, name: "Wallet Leather", price: 220000, rating: 4.2 },
	{ id: 35, name: "Scarf Winter", price: 180000, rating: 4.0 },
	{ id: 36, name: "Gloves Leather", price: 280000, rating: 4.1 },
	{ id: 37, name: "Boots Winter", price: 750000, rating: 4.3 },
	{ id: 38, name: "Sandals Summer", price: 220000, rating: 3.9 },
	{ id: 39, name: "Underwear Pack", price: 150000, rating: 4.0 },
	{ id: 40, name: "Pajamas Set", price: 280000, rating: 4.2 },
	{ id: 41, name: "Novel Mystery", price: 125000, rating: 4.3 },
	{ id: 42, name: "Textbook Math", price: 180000, rating: 4.1 },
	{ id: 43, name: "Cookbook Recipes", price: 220000, rating: 4.4 },
	{ id: 44, name: "Biography Famous", price: 195000, rating: 4.5 },
	{ id: 45, name: "Science Fiction", price: 145000, rating: 4.2 },
	{ id: 46, name: "Romance Novel", price: 135000, rating: 3.9 },
	{ id: 47, name: "History Book", price: 210000, rating: 4.3 },
	{ id: 48, name: "Programming Guide", price: 280000, rating: 4.6 },
	{ id: 49, name: "Poetry Collection", price: 95000, rating: 4.0 },
	{ id: 50, name: "Children's Book", price: 85000, rating: 4.4 },
	{ id: 51, name: "Dictionary English", price: 165000, rating: 4.2 },
	{ id: 52, name: "Atlas World", price: 190000, rating: 4.1 },
	{ id: 53, name: "Art Book", price: 320000, rating: 4.5 },
	{ id: 54, name: "Travel Guide", price: 175000, rating: 4.3 },
	{ id: 55, name: "Health Book", price: 155000, rating: 4.0 },
	{ id: 56, name: "Business Book", price: 240000, rating: 4.4 },
	{ id: 57, name: "Philosophy Book", price: 185000, rating: 4.1 },
	{ id: 58, name: "Psychology Book", price: 205000, rating: 4.3 },
	{ id: 59, name: "Technology Magazine", price: 45000, rating: 3.8 },
	{ id: 60, name: "Fashion Magazine", price: 55000, rating: 3.9 },
	{ id: 61, name: "Coffee Maker", price: 850000, rating: 4.2 },
	{ id: 62, name: "Blender Electric", price: 650000, rating: 4.1 },
	{ id: 63, name: "Toaster 4-Slice", price: 450000, rating: 4.0 },
	{ id: 64, name: "Microwave Oven", price: 2200000, rating: 4.3 },
	{ id: 65, name: "Refrigerator", price: 8500000, rating: 4.4 },
	{ id: 66, name: "Washing Machine", price: 6500000, rating: 4.2 },
	{ id: 67, name: "Air Conditioner", price: 4500000, rating: 4.1 },
	{ id: 68, name: "Vacuum Cleaner", price: 1800000, rating: 4.3 },
	{ id: 69, name: "Electric Fan", price: 350000, rating: 3.9 },
	{ id: 70, name: "Water Heater", price: 1200000, rating: 4.2 },
	{ id: 71, name: "Rice Cooker", price: 550000, rating: 4.4 },
	{ id: 72, name: "Electric Kettle", price: 280000, rating: 4.1 },
	{ id: 73, name: "Dishwasher", price: 7200000, rating: 4.3 },
	{ id: 74, name: "Food Processor", price: 950000, rating: 4.2 },
	{ id: 75, name: "Juice Extractor", price: 420000, rating: 4.0 },
	{ id: 76, name: "Bread Maker", price: 1500000, rating: 4.1 },
	{ id: 77, name: "Slow Cooker", price: 680000, rating: 4.3 },
	{ id: 78, name: "Pressure Cooker", price: 890000, rating: 4.4 },
	{ id: 79, name: "Stand Mixer", price: 2200000, rating: 4.5 },
	{ id: 80, name: "Hand Mixer", price: 380000, rating: 4.0 },
	{ id: 81, name: "Basketball", price: 250000, rating: 4.2 },
	{ id: 82, name: "Soccer Ball", price: 180000, rating: 4.1 },
	{ id: 83, name: "Tennis Racket", price: 850000, rating: 4.3 },
	{ id: 84, name: "Badminton Set", price: 320000, rating: 4.0 },
	{ id: 85, name: "Swimming Goggles", price: 95000, rating: 3.9 },
	{ id: 86, name: "Yoga Mat", price: 220000, rating: 4.2 },
	{ id: 87, name: "Dumbbells Set", price: 450000, rating: 4.4 },
	{ id: 88, name: "Treadmill", price: 8500000, rating: 4.3 },
	{ id: 89, name: "Exercise Bike", price: 5200000, rating: 4.1 },
	{ id: 90, name: "Jump Rope", price: 75000, rating: 4.0 },
	{ id: 91, name: "Resistance Bands", price: 120000, rating: 4.2 },
	{ id: 92, name: "Boxing Gloves", price: 380000, rating: 4.1 },
	{ id: 93, name: "Baseball Glove", price: 420000, rating: 4.3 },
	{ id: 94, name: "Golf Clubs Set", price: 3200000, rating: 4.5 },
	{ id: 95, name: "Fishing Rod", price: 680000, rating: 4.2 },
	{ id: 96, name: "Camping Tent", price: 1500000, rating: 4.4 },
	{ id: 97, name: "Sleeping Bag", price: 550000, rating: 4.1 },
	{ id: 98, name: "Hiking Backpack", price: 780000, rating: 4.3 },
	{ id: 99, name: "Water Bottle", price: 150000, rating: 4.0 },
	{ id: 100, name: "Thermos Flask", price: 280000, rating: 4.2 },
	{ id: 101, name: "Shampoo", price: 45000, rating: 4.1 },
	{ id: 102, name: "Toothpaste", price: 25000, rating: 4.0 },
	{ id: 103, name: "Body Lotion", price: 65000, rating: 4.2 },
	{ id: 104, name: "Face Wash", price: 55000, rating: 4.1 },
	{ id: 105, name: "Deodorant", price: 38000, rating: 3.9 },
	{ id: 106, name: "Hair Conditioner", price: 52000, rating: 4.0 },
	{ id: 107, name: "Lipstick", price: 85000, rating: 4.3 },
	{ id: 108, name: "Perfume", price: 320000, rating: 4.4 },
	{ id: 109, name: "Nail Polish", price: 35000, rating: 3.8 },
	{ id: 110, name: "Face Cream", price: 125000, rating: 4.2 },
	{ id: 111, name: "Sunscreen", price: 95000, rating: 4.3 },
	{ id: 112, name: "Hair Oil", price: 68000, rating: 4.0 },
	{ id: 113, name: "Body Scrub", price: 78000, rating: 4.1 },
	{ id: 114, name: "Eye Cream", price: 185000, rating: 4.2 },
	{ id: 115, name: "Cleansing Wipes", price: 42000, rating: 3.9 },
	{ id: 116, name: "Mouthwash", price: 35000, rating: 4.0 },
	{ id: 117, name: "Dental Floss", price: 22000, rating: 4.1 },
	{ id: 118, name: "Hand Sanitizer", price: 28000, rating: 4.3 },
	{ id: 119, name: "Vitamins C", price: 125000, rating: 4.4 },
	{ id: 120, name: "Protein Powder", price: 450000, rating: 4.2 },
	{ id: 121, name: "Rice 5kg", price: 65000, rating: 4.1 },
	{ id: 122, name: "Cooking Oil", price: 35000, rating: 3.9 },
	{ id: 123, name: "Sugar 1kg", price: 15000, rating: 4.0 },
	{ id: 124, name: "Salt 500g", price: 8000, rating: 4.0 },
	{ id: 125, name: "Coffee Beans", price: 95000, rating: 4.3 },
	{ id: 126, name: "Tea Bags", price: 25000, rating: 4.1 },
	{ id: 127, name: "Instant Noodles", price: 3500, rating: 3.8 },
	{ id: 128, name: "Bread Loaf", price: 18000, rating: 4.0 },
	{ id: 129, name: "Milk 1L", price: 12000, rating: 4.1 },
	{ id: 130, name: "Eggs Dozen", price: 22000, rating: 4.2 },
	{ id: 131, name: "Chicken Meat", price: 45000, rating: 4.0 },
	{ id: 132, name: "Beef Steak", price: 125000, rating: 4.3 },
	{ id: 133, name: "Fish Fillet", price: 68000, rating: 4.1 },
	{ id: 134, name: "Fruits Basket", price: 85000, rating: 4.4 },
	{ id: 135, name: "Vegetables Mix", price: 35000, rating: 3.9 },
	{ id: 136, name: "Cheese Block", price: 55000, rating: 4.2 },
	{ id: 137, name: "Butter 250g", price: 28000, rating: 4.0 },
	{ id: 138, name: "Yogurt Pack", price: 22000, rating: 4.1 },
	{ id: 139, name: "Ice Cream", price: 35000, rating: 4.3 },
	{ id: 140, name: "Chocolate Bar", price: 15000, rating: 4.2 },
	{ id: 141, name: "LEGO Classic", price: 450000, rating: 4.5 },
	{ id: 142, name: "Puzzle 1000pc", price: 180000, rating: 4.3 },
	{ id: 143, name: "Board Game", price: 320000, rating: 4.4 },
	{ id: 144, name: "Action Figure", price: 220000, rating: 4.2 },
	{ id: 145, name: "Doll House", price: 680000, rating: 4.3 },
	{ id: 146, name: "Toy Car Set", price: 150000, rating: 4.1 },
	{ id: 147, name: "Stuffed Animal", price: 120000, rating: 4.4 },
	{ id: 148, name: "Building Blocks", price: 280000, rating: 4.2 },
	{ id: 149, name: "Remote Car", price: 420000, rating: 4.3 },
	{ id: 150, name: "Drone Mini", price: 1500000, rating: 4.4 },
	{ id: 151, name: "Robot Kit", price: 550000, rating: 4.2 },
	{ id: 152, name: "Science Kit", price: 380000, rating: 4.1 },
	{ id: 153, name: "Art Supplies", price: 220000, rating: 4.3 },
	{ id: 154, name: "Coloring Book", price: 45000, rating: 4.0 },
	{ id: 155, name: "Crayons Set", price: 35000, rating: 4.2 },
	{ id: 156, name: "Play-Doh Set", price: 85000, rating: 4.4 },
	{ id: 157, name: "Card Game", price: 65000, rating: 4.1 },
	{ id: 158, name: "Magic Set", price: 180000, rating: 4.3 },
	{ id: 159, name: "Train Set", price: 520000, rating: 4.2 },
	{ id: 160, name: "Teddy Bear", price: 95000, rating: 4.4 },
	{ id: 161, name: "Smart TV 55", price: 12000000, rating: 4.6 },
	{ id: 162, name: "Soundbar", price: 2200000, rating: 4.3 },
	{ id: 163, name: "Gaming Console", price: 8500000, rating: 4.5 },
	{ id: 164, name: "Streaming Device", price: 950000, rating: 4.2 },
	{ id: 165, name: "DVD Player", price: 650000, rating: 3.9 },
	{ id: 166, name: "Home Theater", price: 5200000, rating: 4.4 },
	{ id: 167, name: "Projector", price: 3800000, rating: 4.1 },
	{ id: 168, name: "Antenna TV", price: 180000, rating: 3.8 },
	{ id: 169, name: "Cable HDMI", price: 85000, rating: 4.0 },
	{ id: 170, name: "Wall Mount", price: 220000, rating: 4.2 },
	{ id: 171, name: "TV Remote", price: 120000, rating: 3.9 },
	{ id: 172, name: "Streaming Camera", price: 1800000, rating: 4.3 },
	{ id: 173, name: "Microphone", price: 850000, rating: 4.1 },
	{ id: 174, name: "Studio Lights", price: 1500000, rating: 4.2 },
	{ id: 175, name: "Green Screen", price: 950000, rating: 4.0 },
	{ id: 176, name: "Tripod Stand", price: 380000, rating: 4.3 },
	{ id: 177, name: "Camera Lens", price: 5200000, rating: 4.5 },
	{ id: 178, name: "Memory Card", price: 280000, rating: 4.2 },
	{ id: 179, name: "Camera Bag", price: 420000, rating: 4.1 },
	{ id: 180, name: "Lens Filter", price: 680000, rating: 4.3 },
	{ id: 181, name: "Furniture Sofa", price: 8500000, rating: 4.4 },
	{ id: 182, name: "Dining Table", price: 3200000, rating: 4.2 },
	{ id: 183, name: "Bed Frame", price: 4500000, rating: 4.3 },
	{ id: 184, name: "Wardrobe", price: 5200000, rating: 4.1 },
	{ id: 185, name: "Bookshelf", price: 1800000, rating: 4.2 },
	{ id: 186, name: "Coffee Table", price: 1200000, rating: 4.0 },
	{ id: 187, name: "Desk Office", price: 2200000, rating: 4.3 },
	{ id: 188, name: "Chair Gaming", price: 1500000, rating: 4.4 },
	{ id: 189, name: "Bar Stool", price: 680000, rating: 4.1 },
	{ id: 190, name: "Ottoman", price: 850000, rating: 4.2 },
	{ id: 191, name: "Side Table", price: 420000, rating: 4.0 },
	{ id: 192, name: "Dresser", price: 2800000, rating: 4.3 },
	{ id: 193, name: "Nightstand", price: 950000, rating: 4.1 },
	{ id: 194, name: "Vanity Table", price: 1800000, rating: 4.2 },
	{ id: 195, name: "Storage Cabinet", price: 2200000, rating: 4.3 },
	{ id: 196, name: "Shoe Rack", price: 380000, rating: 4.0 },
	{ id: 197, name: "Coat Hanger", price: 120000, rating: 3.9 },
	{ id: 198, name: "Mirror Wall", price: 680000, rating: 4.2 },
	{ id: 199, name: "Curtains Set", price: 420000, rating: 4.1 },
	{ id: 200, name: "Rug Carpet", price: 1500000, rating: 4.3 },
];
