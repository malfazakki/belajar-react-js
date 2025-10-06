import { useState } from "react";

export default function ContactForm() {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
	});

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	return (
		<>
			<h1>Contact Form</h1>
			<form>
				<div>
					<label>First Name</label>
					<input type='text' name='firstName' value={formData.firstName} onChange={handleChange} />
				</div>

				<div>
					<label>Last Name</label>
					<input type='text' name='lastName' value={formData.lastName} onChange={handleChange} />
				</div>

				<div>
					<label>Email</label>
					<input type='email' name='email' value={formData.email} onChange={handleChange} />
				</div>

				<button type='submit'>Submit</button>
			</form>

			<div>
				<h2>Data:</h2>
				<p>Nama Depan: {formData.firstName}</p>
				<p>Nama Belakang: {formData.lastName}</p>
				<p>Email: {formData.email}</p>
			</div>
		</>
	);
}
