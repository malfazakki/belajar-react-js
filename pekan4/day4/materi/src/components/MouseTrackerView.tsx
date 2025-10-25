import type { FC } from "react";
import MouseTracker from "./MouseTracker";

const MouseTrackerView: FC = () => {
	return (
		<>
			<div>
				<h2>Render Props Pattern</h2>
				<p>Gerakkan mouse anda dibawah sini:</p>

				<MouseTracker
					render={(mousePosition) => (
						<p style={{ position: "absolute", top: mousePosition.y - 10, left: mousePosition.x - 10 }}>
							({mousePosition.x}, {mousePosition.y})
						</p>
					)}
				/>
			</div>
		</>
	);
};

export default MouseTrackerView;
