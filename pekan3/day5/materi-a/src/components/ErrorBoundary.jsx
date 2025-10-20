import React from "react";

export class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false, error: null, errorInfo: null };
	}

	static getDerivedStateFromError() {
		// Memperbarui state sehingga render berikutnya akan menampilkan UI fallback.
		return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {
		// Anda juga bisa mencatat error ke layanan pelaporan error
		console.error("ErrorBoundary caught an error:", error, errorInfo);
		this.setState({ error, errorInfo });
	}

	render() {
		if (this.state.hasError) {
			// Anda bisa me-render UI fallback kustom apa pun
			return (
				<div style={{ border: "1px solid red", padding: "20px", margin: "20px" }}>
					<h2>Terjadi Kesalahan!</h2>
					<p>Maaf, ada yang tidak beres.</p>
					{/* Untuk debugging, Anda bisa menampilkan detail error */}
					{/* <details style={{ whiteSpace: "pre-wrap" }}>
						{this.state.error && this.state.error.toString()}
						<br />
						{this.state.errorInfo.componentStack}
					</details> */}
				</div>
			);
		}

		return this.props.children;
	}
}
