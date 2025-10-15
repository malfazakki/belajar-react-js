export default function TemperatureInput({ temperature, scale, onTemperatureChange }) {
	const scaleNames = {
		c: "Celsius",
		f: "Fahrenheit",
	};

	return (
		<>
			<fieldset>
				<legend>Masukkan suhu dalam {scaleNames[scale]}: </legend>
				<input type='number' value={temperature} onChange={(e) => onTemperatureChange(e.target.value)} />
			</fieldset>
		</>
	);
}
