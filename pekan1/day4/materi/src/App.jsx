import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button";
import LoginButton from "./components/LoginButton";
import RegisterButton from "./components/RegisterButton";

export default function App() {
	const styles = {
		navbarStyle: {
			display: "flex",
			gap: "50px",
			listStyle: "none",
			justifyContent: "center",
			cursor: "pointer",
			padding: "10px",
			backgroundColor: "rgba(255,255,255,.1)",
			borderRadius: "8px",
			maxWidth: "300px",
			marginLeft: "auto",
			marginRight: "auto",
		},
		heroStyle: {
			width: "100%",
			height: "300px",
			objectFit: "cover",
			objectPosition: "center",
		},
	};

	return (
		<>
			<main>
				<nav>
					<ul style={styles.navbarStyle}>
						<li>Home</li>
						<li>About</li>
						<li>Contact</li>
					</ul>
				</nav>
				<section className='container'>
					<div>
						<img
							src='https://images.pexels.com/photos/1714202/pexels-photo-1714202.jpeg'
							alt='coding monitor'
							style={styles.heroStyle}
						/>
					</div>
				</section>

				<section>
					<div className='button-container'>
						{/* <button className='button'>Read More</button> */}
						{/* <Button variant={"warning"}>Read More</Button> */}
					</div>

					<div className='button-container'>
						{/* <RegisterButton /> */}
						{/* <Button variant={"success"}>Register</Button> */}
					</div>
					<div className='button-container'>
						{/* <LoginButton /> */}
						{/* <Button variant={"error"}></Button> */}
					</div>
				</section>

				<section>
					<div className='button-container'>
						<Button
						// onClick={() => {
						// 	setIsLoggedIn((prev) => !prev);
						// }}
						>
							Login
						</Button>
					</div>
					<Alert isLoggedIn={false} />
				</section>
			</main>
		</>
	);
}
