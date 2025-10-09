import { useState } from "react";

export default function LoginForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [phone, setPhone] = useState("");
	const [emailError, setEmailError] = useState("");
	const [phoneError, setPhoneError] = useState("");
	// const [passwordError, setPasswordError] = useState("");

	const validateEmail = (email) => {
		if (email === "") {
			setEmailError("Email tidak boleh kosong");
		} else if (!email.includes("@")) {
			setEmailError("Email tidak valid");
		}
	};

	const validatePhone = (phone) => {
		if (!phone.includes("+62")) {
			setPhoneError("Nomor anda bukan format indonesia");
		}
	};

	const handleSubmit = () => {
		// validateEmail(email);
		validatePhone(phone);
	};

	return (
		<>
			<div className='border-2 border-gray-300 p-5 rounded-md'>
				{/* <div className='grid gap-2'>
					<label>Email</label>
					<input
						type='email'
						value={email}
						className={`border-2 rounded-sm ps-3 ${emailError ? "border-red-500" : "border-gray-300"}`}
						placeholder='Masukkan email...'
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
					{emailError && <p className='text-red-500'>{emailError}</p>}
				</div> */}

				<div className='grid gap-2'>
					<label>Phone</label>
					<input
						type='tel'
						value={phone}
						className={`border-2 rounded-sm ps-3 ${emailError ? "border-red-500" : "border-gray-300"}`}
						placeholder='Masukkan nomor hape anda...'
						onChange={(e) => {
							setPhone(e.target.value);
						}}
					/>
					{phoneError && <p className='text-red-500'>{phoneError}</p>}
				</div>

				<div className='grid gap-2'>
					<label>Password</label>
					<input
						type='password'
						value={password}
						className='border-2 rounded-sm ps-3 border-gray-300'
						placeholder='********'
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>

				<div>
					<button
						type='submit'
						className='bg-green-500 px-3 py-1 mt-3 rounded-md mx-auto hover:bg-green-300 cursor-pointer active:bg-green-100'
						onClick={handleSubmit}
					>
						Login
					</button>
				</div>
			</div>
		</>
	);
}
