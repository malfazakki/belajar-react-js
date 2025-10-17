import { Suspense, useState } from "react";
import "./App.css";
import LazyLoadedComponent from "./components/LazyLoadedComponents";

function App() {
	const [showLazy, setShowLazy] = useState(false);

	return (
		<div>
			<h2>Lazy Loading Components</h2>
			<button onClick={() => setShowLazy(true)}>Tampilkan Komponen Lazy</button>

			{showLazy && (
				<Suspense fallback={<div>Memuat komponen...</div>}>
					{/* Komponen ini hanya akan dimuat saat showLazy true */}
					<LazyLoadedComponent />
				</Suspense>
			)}
		</div>
	);
}

export default App;
