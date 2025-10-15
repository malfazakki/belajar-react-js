import { useState } from "react";
import TemperatureInput from "./TemperatureInput";
import { toCelsius, toFahrenheit, tryConvert } from "../utils/convertionFunctions";

export default function Calculator() {
	const [temperature, setTemperature] = useState("");
	const [scale, setScale] = useState("c");

	const handleCelsiusChange = (temp) => {
		setTemperature(temp);
		setScale("c");
	};

	const handleFahrenheitChange = (temp) => {
		setTemperature(temp);
		setScale("f");
	};

	const celsius = scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
	const fahrenheit = scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

	return (
		<>
			<TemperatureInput scale={"c"} temperature={temperature} onTemperatureChange={handleCelsiusChange} />
			<br />
			<TemperatureInput scale={"f"} temperature={temperature} onTemperatureChange={handleFahrenheitChange} />

			<br />

			<p>Suhu dalam Celsius: {celsius}</p>
			<p>Suhu dalam Fahrenheit: {fahrenheit}</p>
		</>
	);
}
