import "./App.css";

interface User {
	name: string;
	email: string;
	age: number;
	isLoggedIn: boolean;
}

type Username = Pick<User, "name">;

function App() {
	const username: Username = {
		name: "Luthfi",
	};

	console.log(username);

	return <></>;
}

export default App;
