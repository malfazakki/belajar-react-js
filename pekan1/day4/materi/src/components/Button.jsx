// variant
/*
 * variant button: success, warning, error
 */

export default function Button({ variant, children }) {
	const getDynamicButton = () => {
		const baseStyle = {
			padding: "3px",
			borderRadius: "5px",
		};

		const variants = {
			success: { backgroundColor: "rgba(rgba(0, 255, 0, 1))", color: "rgba(rgba(0, 152, 0, 1))" },
			warning: { backgroundColor: "rgba(255, 199, 0, 1)", color: "rgba(0, 152, 0, 1))" },
			error: { backgroundColor: "rgba(255, 0, 0, 1)", color: "rgba(rgba(110, 0, 0, 1))" },
		};

		return {
			...baseStyle,
			...variants[variant],
		};
	};

	return (
		<>
			<button style={getDynamicButton()}>{children}</button>
		</>
	);
}
