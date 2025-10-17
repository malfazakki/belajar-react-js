import "./App.css";
import PostViewer from "./components/PostViewer";

function App() {
	return (
		<>
			<PostViewer postId={1} />
			<PostViewer postId={2} />
		</>
	);
}

export default App;
