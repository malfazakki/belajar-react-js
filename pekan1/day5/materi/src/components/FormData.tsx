import { useState } from "react";

export default function FormData() {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
	});

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("Data yang disubmit:", formData);
		alert(`Terima kasih, ${formData.firstName}! Data Anda telah disubmit.`);
	};
	return (
		<>
			<form onSubmit={handleSubmit}>
				<h2 className='text-3xl mb-10'>Formulir Kontak</h2>
				<div className='flex flex-col gap-5'>
					<div className='grid gap-2'>
						<label>Nama Depan:</label>
						<input
							type='text'
							name='firstName'
							value={formData.firstName}
							onChange={handleChange}
							className='border-gray-500 rounded-sm p-2 border-[2px]'
						/>
					</div>
					<div className='grid gap-2'>
						<label>Nama Belakang:</label>
						<input
							type='text'
							name='lastName'
							value={formData.lastName}
							onChange={handleChange}
							className='border-gray-500 rounded-sm p-2 border-[2px]'
						/>
					</div>
					<div className='grid gap-2'>
						<label>Email:</label>
						<input
							type='email'
							name='email'
							value={formData.email}
							onChange={handleChange}
							className='border-gray-500 rounded-sm p-2 border-[2px]'
						/>
					</div>
					<button
						type='submit'
						className='px-5 py-2 bg-green-400 text-white rounded-md hover:bg-green-500 cursor-pointer'
					>
						Submit
					</button>
				</div>
				<div className='mt-10'>
					<p>Current Data: {JSON.stringify(formData)}</p>
				</div>
			</form>
		</>
	);
}
